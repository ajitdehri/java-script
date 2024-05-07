// function sum(num1 ,num2){
//     return num1+num2;
// }


// const result=sum(7,7);

// console.log(result);


// function multiplication(a,b){
//     return a*b;
// }

// const array=[2,3];
// const mul=multiplication(...array);
// console.log(mul);


// rest parameter

// function sum(...args){
//     let sum1=0;
//     for(let value of args){
//         sum1=sum1+value;
//     }

//     return sum1;
// }

// let result=sum(1,2,3,4);
// console.log(result);

// Arrow function


// const sum=(a,b)=>a+b;
// const result=sum(5,5);
// console.log(result);

// var x=5;
// function outer(){
//     let x=10;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();


// named function expresssion


// var x= function abc(){
//     console.log("hello");
//     console.log(abc);
// }

// x();

// IIFE


// (function hello(){
//     console.log("hello");
// })();


// Array push/pop


const num=[1,2,3,4];
const result=num.pop();
num.push(7);
// console.log(result);
console.log(num);