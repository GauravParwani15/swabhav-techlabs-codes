angular.module('main',[])
    .controller('MainController', ['$scope',function($scope){
        $scope.student = {
            roll:101,
            name:'Sachin',
            cgpa:7.5
        }
    }])