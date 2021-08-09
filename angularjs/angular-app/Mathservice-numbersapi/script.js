angular.module('main',[])
    .controller('EvenController',['$scope','$http',function($scope,$http){
    $scope.checkHandler = function(){

        console.log($scope.input)
        $http.get("http://numbersapi.com/"+$scope.input)
            .then(function(response){
                $scope.response=response;
                console.log(response);
            })
            .catch(function(err){
                console.log(err)
            })

        console.log("end of handler");
    }
}])
