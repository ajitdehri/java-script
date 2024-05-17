//creating  and using objects


// const user={
//     // name:["johan","ajit"],
//     name:{
//         firstName:"kumar",
//         lastName:"ajit"
//     },
//     age:25,
//     printDetails:function(){
//         console.log("details of user...");
//     },
//     greeting:function(){
//         console.log("greeting!!");

//     }
// };



// console.log(user.name.firstName);
// console.log(user.name.lastNmae);
// console.log(user.age);

// user.printDetails();

// user.greeting();

// acess to bracket notation

// console.log(user["age"]);


// setting object members
//udate first name
//  user.name.firstName="mohit";
// console.log(user.name.firstName);


// in side set another poroperties

// user.hobbies=["listening music","cocking"];
// console.log(user.hobbies);

// console.log(user);


// added new funtion in existing object


// user.fairwell=function(){
//     console.log("good bye!!");
// };
// user.fairwell();

// console.log(user);





// defineing classes in javaScript


class customer{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    get info(){
        return this.name;
    }

    printDetails(){
        console.log(`Name and email of customer is ${this.name} and ${this.email}`);
    }
}

// // create object for acess

// const customer1=new customer("Ajit kumar","ajitdehri1997@gmail.com");
// console.log(customer1);

// customer1.printDetails();

// console.log(customer1.info);



// inferitance


// class vipcustomer extends customer{
//     constructor(name,email,VipLevel){
//         super(name,email);
//         this.VipLevel=VipLevel;
//     }

//     updateVIPLevel(level){
//         this.VipLevel=level;
//         console.log(`VipLevel is..,${this.VipLevel}`);
//         console.log("viplevel--",this.VipLevel);

//     }
// };

// const vipcutomer1=new vipcustomer("ajit","ajitdehri1997@gmail.com","Gold");
// vipcutomer1.printDetails();
// console.log(vipcutomer1);
// vipcutomer1.updateVIPLevel("platinum");//update value of vipcustomer



// var emp = class {
//     constructor(id, name) {
//       this.id = id;
//       this.name = name;
//     }
//   };
//   console.log(emp.name);


// this keyword

// console.log(this);


// function abc(){
//     console.log("abc");
//     console.log(this);
// }

// abc();



"use strict"

// function abc(){
//     console.log("abc");
//     console.log(this);
// }

// abc();


// call,Apply and bind method

// const user={
//     firstName:"ajit",
//     lastName:"kumar",

//     printFullName:function(){
//         console.log(`my nmae is ${this.firstName} ${this.lastName}`);
//     }
// }

//  user.printFullName();


// const user2={
//     firstName:"sonu",
//     lastName:"kumar"

// }
// user.printFullName.call(user2);



const user={
    firstName:"ajit",
    lastName:"kumar",

    
}

let printFullName=function(color,game){
    console.log(`my nmae is ${this.firstName} ${this.lastName} and favourite color ${color}`);
    console.log(`my favourite game is ${game}`);
}

printFullName.call(user,"red","cricket");