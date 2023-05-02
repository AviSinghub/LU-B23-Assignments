// var message = "Hello Students! welcome to Node JS class.";
// console.log(message);

// const mut = 12*16;
// const sub = 156-42;
// console.log(mut);
// console.log(`The multiply of 12*16 = ${mut}`);
// console.log(sub);
// console.log(`The subtraction of 156-42 = ${sub}`);
// console.log(global);

// const moment = require('moment');
// const date = moment(new Date).format("MMM Do YYYY, h:mm:ss a");
// console.log(date);

//Note: use Ctrl + C to kill command realtime.


// global.setTimeout(() => {
//     console.log("Timeout set 5sec")
// }, 5000);

// console.log(global)
// global.setInterval(() => {
//     console.log("Interval enabled for every 3sec")
// }, 4000);

global.setTimeout(() => {
    console.log("Timeout duration set for 9sec");
    clearInterval(intr);
}, 15000);


const intr = global.setInterval(() => {
    console.log("Interval set for every 2sec");
}, 3000);


console.log(__dirname);         // to get absolute path of directory
console.log(__filename);        // to get absolute path of filename