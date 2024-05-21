console.log("start");

        setTimeout(()=>{
            console.log("cousre from InterShala");//wait for 2sec then after exectue this code..
        },0);


        Promise.resolve().then((val)=>{
            console.log("microTask");
        });
        
        console.log("end");
