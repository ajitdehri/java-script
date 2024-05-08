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

// const num=[8,5,3,9,2,1,122];
// num.sort(function(a,b){return b-a});
// console.log(num);
// num.reverse();
// console.log(num);


// fillter array

// const arr=[2,3,4,5,6,7,8];

// function even(num){
//     return num%2==0;
// }

// // or

// // const filterArray=arr.filter(even);
// const filterArray=arr.filter(function even(num){
//     return num%2==0;
//     });


// example 2

// const arr=[2,3,4,5,6,7,8];
// function gnumber(num){
//     return num>5;
// }

// const newArray=arr.filter(gnumber);
// console.log(newArray);


// example3


// const student=[
//     {
//         firstName:"ajit kumar",
//         rollNumber: 8,
//         mark:90
//     },
//     {
//         firstName:"rahul kumar",
//         rollNumber: 6,
//         mark:60
//     }

// ]

// const newArray=student.filter(marks=>marks.mark>80);
// console.log(newArray);



// reduse method...

// const arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i<arr.length;i++){     old way/....
//     sum +=arr[i];
   
// }
// console.log(sum);

// const arr=[1,2,3,4,5];
// const result=arr.reduce (function(acc, curr){  ////////sum of array
//     return acc= acc + curr;
// },0);
// console.log(result);



// example find maximum value

// const arr=[1,2,3,4,5];

// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){            //old way
//         max=arr[i];
//     }
// }

// console.log(max);


// const result=arr.reduce(function(max,curr){
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0);

// console.log(result);



// chaining map filter and rduse method use 

// updat marks of student

// const student=[
//     {name:"raj",roll:34,mark:67},
//     {name:"rahul",roll:4,mark:34},
//     {name:"sonu",roll:24,mark:56}
// ]


// const updatemarks=student.map(students=>{
//     if(students.mark<60){
//         students.mark +=20;
//     }
//     return students;
// })

// console.log(updatemarks);
// //fillter use there

// const result=updatemarks.filter(student=> student.mark>60);
// console.log(result);


// // reduce..
// const totalmarkx=result.reduce(function(acc,curr){
//     acc=acc+curr.mark;
//     return acc;
// },0);
// console.log(totalmarkx);




// every methods
// const age=[16,25,43,57,28];

// const isAdult=age.every(ages=>ages>=18);
// console.log(isAdult);


// // some methods

// const kidage=[16,25,43,57,28];

// const iskids=age.some(kid=>kid>=18);
// console.log(iskids);



// search method

    // find

    // const arry=[1,2,3,5,5,8,7];

    // const result=arry.find(age=>age%2==0);
    // console.log(result);


    // //findLast

    // const farr=[1,7,3,5,5,6,8];

    // const ans=farr.findLast(element=>element%2==0);
    // console.log(ans);


    // //findIndex

    // const coArr=[1,9,3,4,5];

    // const findIndexAns=coArr.findIndex(indexx=>indexx%2==0);
    // console.log(findIndexAns);


    //findIndexLast


  const arrindex=[1,3,13,15,17,8];
  const resultIndex=arrindex.findLastIndex(a=>a%2==0);
  console.log(resultIndex);





