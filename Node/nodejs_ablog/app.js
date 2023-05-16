//importing express lib
const express = require('express');
const morgan = require('morgan');
const  mongoose = require('mongoose');
const { result } = require('lodash');

const Blog = require('./models/nblog');


const app = express();

//connect to mongoDB
// const dbURI = 'mongodb+srv://avinashblogs:Sd142gfLpTA7d@myfirst-node.bnon4wt.mongodb.net/?retryWrites=true&w=majority';
const dbURI = 'mongodb+srv://avinashblogs:Sd142gfLpTA7d@myfirst-node.bnon4wt.mongodb.net/myFirst-node?retryWrites=true&w=majority';


// mongoose.connect(dbURI,{
//     useNewUrlParse: true,
//     useUnifiedTopology: true
// });

mongoose.connect(dbURI)
.then((result)=> app.listen(3000, console.log("Connection to Database established and listening port 3000.")))

// .then((result)=> console.log("Connected to the database Successfully"))
.catch((err)=> console.log(err));

const net = 'First middleware passed';
const net1 = 'All Middleware passed';

app.set('view engine', 'ejs')

 

//Configuring public directory
app.use(express.static('public'));

//Custom middleware
app.use((req,res,next) =>{
    console.log("New request is made:");
    console.log("Host:", req.hostname);
    console.log("Path:", req.path);
    console.log("Method:", req.method);
    next();   
});

//Implement morgan
app.use(morgan('dev'));

//Creating sandbox for mongoose and mongoDB
app.get('/add-nblog',(req,res)=>{
    const blog = new Blog({
        title: 'Assignment on Database',
        preview: 'Database created with mongoDB',
        body: 'The database created and sucessfully updated blogs to it, thanks for reading this post.'
    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=> {console.log(err)})
});


app.get('/all-nblogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err)
    })
});

app.get('/single-blog',(req,res)=>{
    Blogs.findById("645e52465b1228ac71906f50")
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err)
    })
});




app.get('/',(req,res) =>{
    

    // Adding blogs before rendering 
    const blogs = [
        {blogtitle: 'Arena', previewtext: 'This is a preview text', blogcontent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae quasi suscipit ab velit harum cum laborum quos at ex dolores fugiat eius quibusdam cupiditate obcaecati totam eos, magnam illo! ', author: 'Avinash' },
        {blogtitle: 'Top players', previewtext: 'This is a preview text', blogcontent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae quasi suscipit ab velit harum cum laborum quos at ex dolores fugiat eius quibusdam cupiditate obcaecati totam eos, magnam illo!', author: 'Deepak' },
        {blogtitle: 'Trending games', previewtext: 'This is a preview text', blogcontent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae quasi suscipit ab velit harum cum laborum quos at ex dolores fugiat eius quibusdam cupiditate obcaecati totam eos, magnam illo!', author: 'Preetish' },
        {blogtitle: 'Basic Tutorials', previewtext: 'This is a preview text', blogcontent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae quasi suscipit ab velit harum cum laborum quos at ex dolores fugiat eius quibusdam cupiditate obcaecati totam eos, magnam illo!', author: 'Sachin' },
        {blogtitle: 'Rank', previewtext: 'This is a preview text', blogcontent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae quasi suscipit ab velit harum cum laborum quos at ex dolores fugiat eius quibusdam cupiditate obcaecati totam eos, magnam illo!', author: 'Aaron' }
    ]

    res.render('index',{title: 'Home', blogs})
});

app.get('/about',(req,res) =>{
    
    res.render('about',{title: 'About'})
   
});

app.get('/teams',(req,res) =>{
    
    res.render('teams',{title: 'Teams'})
    
});

app.get('/blogs/create',(req,res)=>{
    res.render('createBlog',{title: 'Create Blog'})
    
});

app.get('/privacy',(req,res) =>{
    
    res.render('privacy',{title: 'Privacy'})
   
});

app.get('/contact',(req,res)=>{
    res.render('contact',{title: 'Contact Us'} )
    
});


//redirect   
app.get('/aboutus',(req,res) =>{
    res.redirect('/about')
    
});

app.get('/abot',(req,res) => {
    res.redirect('about')
    
});

app.get('/team',(req,res) =>{
    
    res.redirect('/teams');
    
});

app.get('/myteams',(req,res) =>{
    
    res.redirect('/teams');
    
});


app.get('/myteam',(req,res) =>{
    
    res.redirect('/teams');
    
    
});
////////



app.use( (req,res) => {
    
    res.status(404).render('404',{title:'404'})
} );