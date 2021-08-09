angular.module('main',[])
.factory('MathService',['$log','$q',function($log,$q){

    var math ={}
    $log.info("inside service")
    math.checkEven = function(no){
        return $q(function(resolve,reject){
            if(no%2==0){
                resolve("even number");
                return
            }
            reject("Odd number")
        })
    }
    return math;
}])


.controller('EvenController',['$scope','MathService',function($scope,MathService){
    $scope.checkHandler = function(){

        MathService.checkEven($scope.input)
        .then(function(result){
            $scope.result=result;
            console.log(result)
        })
        .catch(function(err){
            console.log(err)
        })
        console.log("end of handler");
    }
}])