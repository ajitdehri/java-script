// A function in javaScript which is passed as an argument to another  function...

function createMeassage(name,callback){
    setTimeout(()=>{
        const message=`Hello ${name}`;
        callback(message);
    },1000);
   
}


function displayMessage(message){
    console.log(message);
}

createMeassage(`jhon`,displayMessage);

// const message=createMeassage(`jhon`,displayMessage);
// displayMessage(message);