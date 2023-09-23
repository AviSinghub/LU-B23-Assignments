require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Security system 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

// for new users
router.post('/creatuser',[
// validation  
body('email').isEmail(),
body('name', 'Invalid name String').isLength({ min: 5 }),
body('password','Incorrect password').isLength({ min: 5 })],
async(req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let SecPassword = await bcrypt.hash(req.body.password,salt);

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: SecPassword,  
            mobile: req.body.mobile,
          
        }).then (res.json({success:true}));

        }catch (error) {
        console.log(error)
        res.json({success:false});

    }
})




// for existing user login section 
router.post('/loginuser',[ 
    body('email').isEmail(),
    body('password','Incorrect password').isLength({ min: 5 })],
    async(req,res) => {

        // validation section 
        const errors = validationResult(req);
        if (!errors.isEmpty()) { 
          return res.status(400).json({ errors: errors.array() });
        }
        let email= req.body.email;
        try {
            let userData =  await User.findOne({email})
            if(!userData){
                return res.status(400).json({ errors: " Try logging with correct email or password" });
            }
            
            // Auth control 
            const pwdCompare = await bcrypt.compare(req.body.password,userData.password)

            if(!pwdCompare){
                return res.status(400).json({ errors: " Try logging with correct email or password" });
            }
            const data ={
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_CLASSIFIED_KEY)
            // console.log(process.env.JWT_CLASSIFIED_KEY);
            return res.json({success:true, authToken:authToken});
        }catch (error) {
            console.log(error)
            res.json({success:false});
        }
    })

module.exports = router;





















// router.post('/creatuser', async(req,res) => {
//     try {
//         await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password, 
//             location: req.body.location,
//             // phone: "6358450012",
//             // closingTime:"11:00 PM",
//             // openingTime:"10:30 AM",
//         });
//         res.json({success:true});

//         }catch (error) {
//         console.log(error)
//         res.json({success:false});

//     }
// })
// module.exports = router;