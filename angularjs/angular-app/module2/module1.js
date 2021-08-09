angular.module("modA", ["modB"]).controller("ControllerA", [
  "$scope",
  "$rootScope",
  "$timeout",
  function ($scope, $rootScope,$timeout) {
    $scope.message = "Hello From Controller A";
    $rootScope.developer = {
      name: "Gaurav",
      role: "Jr Developer",
      department: "Web Development",
      address: ["abc", "pqr"],
    };
    $timeout( function () { console.log($rootScope); $rootScope.developer.name="Raj"} , 3000);

  },
]);



