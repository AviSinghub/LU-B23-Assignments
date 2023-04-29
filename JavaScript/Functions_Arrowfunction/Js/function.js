// SIMPLE FUNCTION EXPRESSION 
const solve = function(radius){
    let area = 3.14 * radius**2;
    console.log(area, "m²");
}
solve(2);
///           //          ///


const calc = function(radius){
    let area = 3.14 * radius**2;
    return area;
}
const area = calc(6);
console.log(area, 'm²');
//// Ends ////


// USING AN ARROW FUNCTION 
const calcA = (radius) => {
    return 3.14*radius**2;
}
const marea = calcA(4);
console.log(marea, 'm²');


// simpler ARROW FUNCTION 
const circle = (radius) => 3.14*radius**2;

const newarea = circle(8);
console.log(newarea);

// Example
const greet = function(){
   return "Welcome! This is an function in JS.";
};
let wel = greet();
console.log(wel);
// greet();

// Converting into ARROW FUNCTION 
const greets = () => "Welcome! This is an arrow function.";
let arw_message = greets();
console.log(arw_message);
///        ///           ///


// Simple FUNCTION //
const invoice = function(product,tax){
    let total = 0;
    for(let counter = 0; counter < product.length; counter++){
        total=+ product[counter] + product[counter]*tax;
    }
    return total ;
}
console.log(invoice([10,15,21,46],0.18));
////           ///                  ////

// Using ARROW FUNCTION ////
const invoiceArw = (products,tax) =>{
    let total = 0;
    for(let counter =0; counter < products.length; counter++){
        total=+ products[counter] + products[counter]*tax;
    }
    return total;
};
console.log(invoiceArw([12,54,87,26],0.3));
////           ENDS       //////

// FUNCTION VS METHOD 
const greetin = () =>{
    return "Welcome back ! You're watching function. ";   
};
let wellc = greetin();
console.log(wellc);
///

// object = {method: function(){
//     }
// }

// let filenmane = nameone.toMakeUppercase();

//CALLBACK FUNCTION
//Here is the Function declaration
const functone = (callbackfunct) => {
    let value = 10;
    callbackfunct(value);
}

//Here is the FunctionCall
// functone();  //Uncaught TypeError: callbackfunct is not a function

// functone(
//     function(value){
//         console.log(value);
//     }
// );

functone(
    value =>  {console.log(value);}
);
//// ///             /////

const packagingList = ["Notepad","Books","First aid-kit","phone","Bicycle"];
// packagingList.forEach(
//     function(){
//         console.log("items");
//     }
// );

packagingList.forEach(
    //callback function
    function (packagingList){
        console.log("This itrates in normal callback function:", packagingList);
    }
);

//ARROW FUNCTION
packagingList.forEach(
    packagingList => {console.log("This itrates in normal arrowfunction function:", packagingList);}
);
///        //           /////


//Arrow Function with INDEX VALUES
packagingList.forEach(
    (packagingList,index) => {
        console.log(index+1, "This with index & arrowfunction function:", packagingList);
    }
);


let people = ["Anjali","Rohan","Sagar","Komal","Vignesh","Joel"];

people.forEach(
    //callback function
    function(people,index){
        console.log(index+1, `Hello! Greetings ${people}`);
        // console.log(index+1, "Hello! Greetings", people);
    }
);
 
//with ArrowFunction
const thesepeople = (people,index) => {
    console.log(index+1, `Hello!  '${people}' This is generated usin Arrowfunction `);
};
people.forEach(thesepeople);  //calling


///To print in ul tags with simple function
let ul = document.querySelector('.person');
let myList = ["Suzane","Priyanka", "Rohit","Lokesh","Nikita","Lambert"];
let html = '';

myList.forEach(
    function(person){
        html += `<li style="font-style: italic; color:blue">${person}</li>`;
    }
);
console.log(html);
ul.innerHTML = html;
// document.getElementsByClassName("person").innerHTML = html;  //note can not use with .forEach


//Arrow function used to print ol tags
let ol = document.querySelector('.student');
let stuList = ["Mohan","Ramesh","Sita","Pooja","Krithik","Daniel","Joseph","Christina"];
let empty = '';

stuList.forEach(
    student => empty += `<li style="font-style: italic; color:orangered" >${student}</li>`
);
console.log(empty);
ol.innerHTML = empty;
//// ends////
