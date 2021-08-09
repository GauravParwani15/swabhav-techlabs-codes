function doSomething(input,successCallBackfn,errorCallBackfn){
    var result = Math.random()*input;
    console.log(result);
    if(result>5){
        successCallBackfn ({success:result})
        return
    }
    errorCallBackfn ({error:"something is wrong"})
}

doSomething(10,function(data){
                            console.log("success happened",data)
                            },function (data) {
                                console.log("Error happened",data)
                              } 
            )
            
console.log("end of main");