angular.module('spa',["ngRoute"])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/', {  
            templateUrl: 'Fragments/home.html',  
            controller: 'HomeController'  
            })
            
            .when('/career', {  
            templateUrl: 'Fragments/career.html',  
            controller: 'CareerController'  
            }) 

            .when('/about', {  
            templateUrl: 'Fragments/about.html',  
            controller: 'AboutController'  
            }) 
}])