const fs = require('fs');
// console.log(fs);

//Reading file
// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     console.log(data.toString());  // .toString() simply display the written content in readable format instead of buffer
// })
// console.log('Testing the chronolgy.')

// fs.readFile('./docs/blogs.txt',(err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     console.log(data.toString());
// })

//Writing file
// fs.writeFile('./docs/blog.txt', 'The Sun has been called by many names. The Latin word for Sun is “sol,” which is the main adjective for all things Sun-related: solar. Helios, the Sun god in ancient Greek mythology, lends his name to many Sun-related terms as well, such as heliosphere and helioseismology.',() =>{
//     console.log("File had written successfully");
// })

// fs.writeFile('./docs/blogEarth.txt','The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”',() =>{
//     console.log(" New file created and written successfully");
// })

//Making directory
// fs.mkdir('./additional/geo.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Directory created successfully");
// })

//Checking existing directory
// if(!fs.existsSync('./additional')){
//     fs.mkdir('./additional',(err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder created successfully.");
//     });
// }
// else{
//     fs.rmdir('./additional',(err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("folder deleted.");
//     });
// }

//Delete a file
// if(fs.existsSync('./docs/dfile.txt')){
//     fs.unlink('./docs/dfile.txt',() =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted")
//     });
// }


/// delete file
if(fs.existsSync('./docs/random1.txt')){
    fs.unlink('./docs/random1.txt',(err) =>{
        if(err){
            console.log(err);
        }
        console.log("file deleted.");
    });

}