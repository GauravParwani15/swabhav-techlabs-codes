var app=angular.module('mainApp',[])
    .directive('firstDirective',function(){
        function linkedFunction($scope,element,attributes){
            console.log("inside directive")
            $scope.text="hi there..";
            $scope.changeText = function(newText){
                $scope.text=newText;
            }
        }
        return {
            link:linkedFunction,
            template:'<span ng-click="changeText(\' Welcome to TutorialsPoint\')">Current Text: {{text}} </span>',
            restrict: 'A'
        };
    });

    app.controller('myController',function(){
        
    });