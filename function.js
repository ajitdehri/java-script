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


// const num=[1,2,3,4];
// // const result=num.pop();
// const num1=num.shift();
// console.log(num1);
// // console.log(result);
// console.log(num);
// num.unshift(9);
// console.log(num);


// delete method

// const arr=[1,2,3,4];
// // delete arr[2];
// // console.log(arr);


// //splice() method
// arr.splice(2,0,8,9);

// // arr.splice(0,2);
// console.log(arr);


//slice method

// const num=[1,2,3,4,5];
// const num1=num.slice(1,4);
// console.log(num1);
// console.log(num);



//toSpliced() method

// const num=[1,2,3,4];

// const newNum=num.toSpliced(2,0,8,9);

// console.log(newNum);
// console.log(num);


//concatenation--join two array


// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9];

// const newArr=arr2.concat(arr1);
// console.log(newArr);


// flat-methood


// const a=[[1,2],[3,4],[5,6]];
// const flattedArray=a.flat();
// console.log(flattedArray);



// sort Array---string


// const arr=["apple","mango","orange","babana"];
// // arr.sort();
// // console.log(arr);
// // arr.reverse();
// // console.log(arr);

// const newArrya=arr.toSorted();
// console.log(arr);
// console.log(newArrya);


// sort Array---number

const num=[8,5,3,9,2,1,122];
num.sort(function(a,b){return b-a});
console.log(num);
num.reverse();
console.log(num);

