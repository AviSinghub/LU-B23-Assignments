
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) =>{
    console.log(req.url, req.method)
    res.setHeader('Content-type', 'text/html')

    let path = "./views/"
    console.log(`This is default path: ${path}`);
    switch(req.url){
        case '/':
            path += 'index.html';
            console.log(`This page is now live:${path}`);
            break;
        case '/about':
            path += 'about.html'
            console.log(`This page is now live:${path}`);
            break;
        case '/teams':
            path += 'teams.html'
            console.log(`This page is now live:${path}`);
            break;
        case '/community' :
            path += 'community.html';
            console.log(`The page is live on screen: ${path}`);
            break;       
        default:
            path += '404.html'
            break;        
    }

    // fs.readFile('./views/mypage.html',(err,data) =>{
    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err);
        }else{
            // res.write(data)
            // res.end();
            res.end(data);
        }
        
    })
});
server.listen(3000, 'localhost',() =>{
    console.log("Listening to the request made on port 3000")
});