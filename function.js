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




function sum(...args){
    let sum1=0;
    for(let value of args){
        sum1=sum1+value;
    }

    return sum1;
}

let result=sum(1,2,3,4);
console.log(result);