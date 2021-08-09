function doSomething(input){
    return new Promise(function(resolve,reject){
        console.log("inside promise");
        var result = Math.random()*input;
        console.log(result);
        //async
        if(result>5){
            resolve ({success:result})
            return
    }
    reject ({error:"something is wrong"})
    })
}

doSomething(10)
            .then(function(result){
                console.log("Success happened",result);
            })
            .catch(function(error){
                    console.log("Success happened",error);
            })
            
console.log("end of main");