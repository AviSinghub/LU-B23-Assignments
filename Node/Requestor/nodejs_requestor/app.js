// importing modules 
const express = require('express');
const morgan = require('morgan');
const app = express();
// importin modules ends 

//set port
app.listen(3000,console.log("listening PORT: localhost:3000")); 
// port ends

// middleware config 
app.use((req,res,next) =>{
    console.log("client request is made:");
    console.log("Host:", req.hostname);
    console.log("Path:", req.path);
    console.log("Method:", req.method);
    console.log("middleware passed.")
    next();   

    // redirecting all requests 
    res.send( '<h1 style ="color: white; border-radius:10px ; box-shadow: 2px 5px 10px 2px #e32e2eeb ; background-color: orangered; margin: 20px 200px 0px 200px; padding: 20px 0px 20px 0px; text-align: center; cursor:pointer ; " > Hello! World</h1>' )
    
});

app.use(morgan('dev'));

// ends //