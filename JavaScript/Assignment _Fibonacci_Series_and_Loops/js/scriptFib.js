    //  Using FOR LOOP  ////
const packagingList = ["gloves","toothbrush","shirts", "pants", "watch","stick","camera"];
let fp = "";
for (let counter = 0; counter< packagingList.length; counter++){
    fp += `${counter+1}. ${packagingList[counter]}<br>`;
}
document.getElementById("pkgitem") .innerHTML = fp;
/////// For Loop ends //////


// Using WHILE LOOP  //////

let wloop="";
let w=0;
while(w<packagingList.length){
    wloop+=`${w+1}. ${packagingList[w]}<br>`;
    w++;
}
document.getElementById("whpkgitem") .innerHTML=wloop;
/// WHILE LOOP ends  //////

/// Using DO WHILE LOOP  ////
let dloop="";
let dl=0;
do{
    dloop+= `${dl + 1} .${packagingList[dl]} <br>`;
    dl++; 
}while(dl<packagingList.length);
document.getElementById("dowlop").innerHTML=dloop;
//// DO WHILE LOOP ends  ////

// Fibonacci Series ///
console.log("Fibonacci Series");
let n1=-1;
let n2=1;
for (i=0; i <= 40;i++){
    let nxt_num= n1 + n2;
    n1=n2;
    n2 = nxt_num;
    console.log("series:  "+ nxt_num);
}


// Fibonacci Series to print inside HTML using FOR LOOP ///
let num1=-1;  // to initialize from 0, n1 = -1 is assigned.
let num2=1;
let ffl="";
for( let p=0; p<=39; p++){    // print upto 40 series.
    let f_num= num1 + num2;
    num1 = num2;
    num2 = f_num;
    ffl+= `${p+1}.${("Fibonacci Series: ")} ${f_num}<br>`;
}
document.getElementById("Fib_fl").innerHTML=ffl;


// Fibonacci series uding WHILE LOOP ///
let w1=-1;
let w2=1;
let fwl="";
let q=0;
while(q<40){
    let w_num= w1 + w2;
    w1 = w2;
    w2 = w_num;
    fwl+=`${q+1}.${("Fibonacci Series:  ")}. ${w_num}<br>`;
    q++;
}
document.getElementById("Fib_wh").innerHTML=fwl;
// Fibonacci series uding WHILE LOOP ends ///


// Fibonacci series uding DO WHILE LOOP ///
let fdw="";
let l=-1;
let m=1;
let r=0;
do{
    let d_num= l+m;
    l=m;
    m=d_num;
    fdw+=`${r+1}.${("Fibonacci Series:  ")} ${d_num}<br>`;
    r++;
}while(r<=39);
document.getElementById("fib_dowh").innerHTML=fdw;
// Fibonacci series uding DO WHILE LOOP ends ///