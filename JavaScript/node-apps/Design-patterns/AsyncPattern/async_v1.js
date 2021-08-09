function doSomething(input){
    var result = Math.random()*input;
    console.log(result);
    if(result>5)
        return {success:result}
    return {error:"something is wrong"}
}

console.log(doSomething(10));
console.log("end of main");