angular.module('modA',[])
    .controller('ControllerA',function($scope,$rootScope,$log){

        console.log("Inside Controler A");
        $log.info("using $log service")

        $rootScope.company={
            name:'AurionPro',
            strngth:500
        }

        $scope.developer={
            name:'Gaurav',
            role:'Junior Engineer'
        }
        $log.info($rootScope)
        $log.info($scope)
    })