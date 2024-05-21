function firstFunction(val,callback){
    setTimeout(()=>{
        const result=val+1;
        callback(result);
    },2000);

}

function secondFunction(val,callback){
    const result1=val+2;
    callback(result1);
}

function thirdFunction(val,callback){
    const result2=val+3;
    callback(result2);
}

function diplay(){
    firstFunction(0,(result)=>{
        secondFunction(result,(result1)=>{
            thirdFunction(result1,(result2)=>{
                console.log(`result ${result2}`);
            })
        })
    })
}
diplay();