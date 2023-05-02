const fs = require('fs'); 

// const readStream = fs.createReadStream('./docs/blogfour.txt');
// const readStream = fs.createReadStream('./docs/blogfour.txt',{encoding:'utf8'});
// readStream.on('data',(chunkofData)=>{
//     console.log("\n New file received \n");
//     console.log(chunkofData)
//     // console.log(chunkofData.toString()) 
// });


// const readStream = fs.createReadStream('./docs/blogfour.txt',{encoding:'utf8'});
// readStream.on('data',(chunkofData)=>{
//     console.log("\n New file received \n");
//     console.log(chunkofData)
//     // console.log(chunkofData.toString()) 

//     //writing the data
//     const writeStream = fs.createWriteStream('./docs/blogSix.txt');
//     writeStream.write("\n New file created successfully.")
//     writeStream.write(chunkofData);
// });

//using pipe to read and then writes
// const readStream = fs.createReadStream('./docs/blogFour.txt');
// const writeStream = fs.createWriteStream('./docs/blogpipe.txt');
// readStream.pipe(writeStream);


// read write ysing pipe
// this transfer data from blogEarth to blogfour 
const readStream2 = fs.createReadStream('./docs/blogEarth.txt');
const writeStream = fs.createWriteStream('./docs/blogfour.txt');
readStream2.pipe(writeStream);
