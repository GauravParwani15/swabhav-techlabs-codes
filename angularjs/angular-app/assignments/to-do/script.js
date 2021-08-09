angular.module('task-module',[])
.controller("MainController", ['$scope',function($scope ){
    $scope.tasks = [],
    $scope.taskName = {
        name: ""
    }

 
    $scope.push = function () {
        $scope.tasks.push({ name: $scope.taskName.name ,time: Date.now(), delete:"Delete"});
        $scope.taskName.name=""
 
    };
    $scope.remove = function(item) { 
        $scope.tasks.splice($scope.tasks.indexOf(item), 1);     
      }
}])

.filter('dltbtn', function() {
    return function(input) {
      input = input || '';
      var out = input;
      return out;
    };
  });

