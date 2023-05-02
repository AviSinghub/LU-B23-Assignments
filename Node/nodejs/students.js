const students = ["Akhil", "Subraminam", "Logan", "Peter", "Alexa"];

// batches 
const batch = ['2020', '2021','2022','2023'];

//address
const addr =['middle point','goalghar','haddo', 'dollygunj'];

// console.log(`Students list in student module: ${students}`);
console.log(`Students list in student module: ${students} and batch ${batch}`);

// module.exports = 'Hello! Successfully received from students file.';

//Exporting to modules
module.exports = {students,batch,addr};