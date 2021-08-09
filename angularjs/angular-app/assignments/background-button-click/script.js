angular.module('main',[])
    .controller('event',["$scope",function($scope){

        $scope.red=function (){
            console.log("red")
            document.body.style.background = "red";
            return;
        }

        $scope.blue=function (){
            console.log("blue")
            document.body.style.background = "blue";
            return;
        }     
    }])