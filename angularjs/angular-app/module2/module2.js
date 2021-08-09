angular.module("modB", []).controller("ControllerB", [
  "$scope",
  "$rootScope",
  function ($scope, $rootScope) {
    $scope.message = "Hello From Controller B";
    console.log($rootScope.developer);
  },
]);