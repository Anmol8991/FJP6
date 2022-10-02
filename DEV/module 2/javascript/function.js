function sayHello(){
    console.log('Hello from functions');
}
sayHello();

function sum (num1, num2){
    let addition = num1 + num2;
    console.log(addition);
}
 sum (3,5);

 function multiply (num1,num2){
     return num1*num2;
     }
let ans = multiply(3,5);
console.log(ans);

// FUNCTIONS ARE FIRST CLASS CITIZEN IN JS
let sif = function sub(num1,num2){
    return num1-num2;
}
console.log(sif(10,5));

// IIFE -> IMMEDIATELY INVOKED FUNCTION
(function(){
    console.log('Hello from IIFE');
})();

// IIFE with PARAMETER
(function(num1,num2){
    console.log(num1/num2);
})(10,5);
