const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type: String, 
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
},{
    timestamps: true
});

const Blog = mongoose.model('Nblog', blogSchema);
module.exports = Blog;