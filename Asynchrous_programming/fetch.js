//API--client--request--server

const promiseObject=fetch("https://dummyjson.com/products/1");
console.log(promiseObject);

promiseObject.then(response=>response.json()).then(result=>console.log(result));

promiseObject.catch(err=>console.log(err));
console.log("started request");