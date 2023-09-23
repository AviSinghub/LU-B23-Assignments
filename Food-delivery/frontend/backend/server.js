require('dotenv').config();
const express =require('express');
const app = express()
const PORT = 5050;
const mongoose = require('mongoose');

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 90000,
})
.then((result) => console.log("connection with Database established."))
.catch((err)=> console.log(err))

app.use(express.json({limit:"10mb"}))
app.use('/api', require("./Routes/CreatUser"))

app.use('/api', require("./Routes/CreatFood"))

app.get('/',(req,res) => {
    res.send('Hello world! coding is fun')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
});