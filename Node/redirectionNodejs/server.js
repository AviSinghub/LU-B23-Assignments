
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) =>{
    console.log(req.url, req.method)
    res.setHeader('Content-type', 'text/html')

    let path = "./views/"
    console.log(`This is default path: ${path}`);
    switch(req.url){
        //success state index
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            console.log(`This page is now live:${path}`);
            break;
        //success state index ends
        
        //success state about
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            console.log(`This page is now live:${path}`);
            break;
        //success state ends about    

        //redirecting for about
        case '/aboutUs':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/AboutUs':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/aboutt':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();     
        case '/abot':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();  
            break;
        /// redirecting ends for about


        //success state teams
        case '/teams':
            path += 'teams.html'
            res.statusCode = 200;
            console.log(`This page is now live:${path}`);
            break;
        //success state ends teams    

        //redirecting for teams    
        case '/Team':
            res.statusCode = 301;
            res.setHeader('Location', '/teams');
            res.end();
            break;
        case '/team':
            res.statusCode = 301;
            res.setHeader('Location', '/teams');
            res.end();
            break;     
        case '/Teams':
            res.statusCode = 301;
            res.setHeader('Location', '/teams');
            res.end();
            break;
        //redirecting for teams ends 
        
        //success state community
        case '/community':
            path += 'community.html';
            res.statusCode = 200;
            console.log(`This community page is now live: ${path}`);
            break;
        //success state ends community
        
        //redirecting for community
        case '/comunity':
            res.statusCode = 301;
            res.setHeader('Location', '/community');
            res.end();
            break;
        case '/comun':
            res.statusCode = 301;
            res.setHeader('Location', '/community');
            res.end();
            break;
        case '/mycommunity':
            res.statusCode = 301;
            res.setHeader('Location', '/community');
            res.end();
            break;
        case '/Comunity':
            res.statusCode = 301;
            res.setHeader('Location', '/community');
            res.end();
            break;
        case '/comity':
            res.statusCode = 301;
            res.setHeader('Location', '/community');
            res.end();
            break;                
        // redirecting ends community
        
        //success state contact
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            console.log(`This contact page is now live: ${path}`);
            break;
        //success state ends contact

        //redirecting contact
        case '/contactus':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
        case '/contat':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
        case '/cotat':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;    
        //redirecting contact ends

        //success state playzone
        case '/playzone':
            path += 'playzone.html';
            res.statusCode = 200;
            console.log(`This playzone page is now live: ${path}`);
            break;
        //success state ends playzone

        //redirecting playzone start
        case '/play':
            res.statusCode = 301;
            res.setHeader('Location', '/playzone');
            res.end();
            break;
        case '/zone':
            res.statusCode = 301;
            res.setHeader('Location', '/playzone');
            res.end();
            break;      
        //redirecting playzone ends

        default:
            path += '404.html'
            res.statusCode = 404;
            console.log(`This page is now live:${path}`);
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