require('dotenv').config();
const express = require('express');
const router = express.Router();
const Food = require('../models/Foodproduct')
const { body, validationResult } = require('express-validator');

//adding new foodproducts
router.post('/creatfood',[
// validation 
body('name').notEmpty().withMessage('Name cannot be empty'),
body('category').notEmpty().withMessage('Category cannot be empty'),
body('price').notEmpty().withMessage('Price cannot be empty')],
// body('name').isLength(),
// body('category').isLength(),

// body('price').isLength()],
async(req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        await Food.create({
            name: req.body.name ,
            category: req.body.category,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
        }).then(res.status(200).json({success:true, message: "upload done"}))
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: "Type error: try again"})

    }
    console.log(req.body);  //to debug in terminal DB 
    // res.send({message: "upload done"})
})

module.exports = router;
