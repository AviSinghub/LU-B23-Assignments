const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Biryani:MernBiS@foodhunter.imckhq0.mongodb.net/?retryWrites=true&w=majority'

const mongoDB =()=>{
    mongoose.connect(mongoURI,() =>{
        console.log("connected now with mongoDB");
    } );
}

module.exports = mongoDB