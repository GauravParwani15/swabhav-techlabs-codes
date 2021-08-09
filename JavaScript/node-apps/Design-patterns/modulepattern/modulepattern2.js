var service = function(){
    var obj = {}
    console.log("Service is called");
    
    
    obj.doSomething1 = function(){ console.log( "doing something 1" ) }
    obj.doSomething2 = function(){ console.log( "doing something 2" ) }
    obj.doSomething3 = function(){ console.log( "doing something 3" ) }

    return obj
}()

// console.log(service)
service.doSomething1();
service.doSomething2();
service.doSomething3();
