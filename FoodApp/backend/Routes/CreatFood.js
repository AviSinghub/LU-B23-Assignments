require('dotenv').config();
const express = require('express');
const router = express.Router();
const Food = require('../models/Foodproduct')

//adding new foodproducts
router.post('/creatfood', async(req,res) =>{
    try {
        await Food.create({
            name: req.body.name ,
            category: req.body.category,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
        }).then(res.json({success:true}))
    } catch (error) {
        console.log(error)
        res.json({success:false})

    }
})

module.exports = router;
