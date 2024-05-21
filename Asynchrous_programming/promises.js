const promise=new Promise(function(resolve,reject){
    //some code taking time
    let promiseResult;

    setTimeout(()=>{
        promiseResult=true;
        if(promiseResult=true){
            resolve("sucessFul");
        }else{
            reject ("Rejected");
        }
    },1000);
});

//consuming code

promise.then(result=>console.log(result));
promise.catch(err=>console.log(err));

console.log("hello");