var app = angular.module('myApp', []);
app.controller('validateCtrl', ["$scope","$log",function($scope,$log) {
    
    $scope.setDetails=function(){
        $scope.user= {
        name:$scope.myForm.name.$modelValue,
        age:$scope.myForm.age.$modelValue,
        gender:$scope.myForm.Gender.$modelValue,
        address:$scope.myForm.Address.$modelValue,
        Email:$scope.myForm.email.$modelValue
    }


    $log.info($scope.user);

    }


}]);

