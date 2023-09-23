const mongoose = require('mongoose');
const {Schema} = mongoose;

// building schema foodProduct
const FoodProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: String,
        // data:Buffer,
        // contentType: String
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true 
    },
    date:{
        type: Date,
        default :Date.now
    }
});

module.exports = mongoose.model('fooditem',FoodProductSchema)
