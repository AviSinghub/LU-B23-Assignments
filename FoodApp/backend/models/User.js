const mongoose = require('mongoose');
const {Schema} = mongoose;

// building schema of user 
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    // location:{
    //     type: String,
    //     required: true
    // },
    mobile:{
        type: Number,
        required: true 
    },
    // closingTime:{
    //     type: String,
        
    // },
    // openingTime:{ 
    //     typr: String,
        
    // },

    date:{
        type: Date,
        default :Date.now
    }
    
});
module.exports = mongoose.model('users',UserSchema);

