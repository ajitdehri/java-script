// let dayNumber = new Date ().getDay();

// let day;

// switch(dayNumber){
//     case 0:
//         day="sunday";
//         break;
    
        
//     case 1:
//         day="monday";
//         break;
        
//     case 2:
//         day="tuesday";
//         break;
        
//     case 3:
//         day="wednesday";
//         break;
    
//     case 4:
//         day="thursday";
//         break;
        
//     case 5:
//         day="friday";
//         break;
        
//     case 6:
//         day="saturday";    
//         break;

// }
// console.log("Today day is==",day);



// for loop



// for(let i=1;i<=5;i++){
//     let str="* ";
//     console.log(str.repeat(i));
    
// }

// for in loop

// const object ={Harry:56,kumar:98,jay:78};
// for(key in object){
//     console.log(key,":" ,object[key]);
// }


// for of loop

// const fruits=["mango", "apple","orange"];

// for( let items of fruits){
//     console.log(items);
// }


// while loop
// let value =1;

// while(value<=10){
//     console.log(value);
//     value++;
// }


// do-while loop


// let num=1;
// do{
//     console.log(num);
//     num++;
// }while(num<=5);


// console.log(this);

const cart = { p001: 2, p002: 1, p003: 3 };

function updateCart(productId, newQuantity) {
    cart[productId] = newQuantity;
}

updateCart("p002", 5);

console.log(cart["p002"]);

  