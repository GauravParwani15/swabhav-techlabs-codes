var spa = angular.module('acme', ['ngRoute']);
spa.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when("/", {
            redirectTo : '/home',
        })
        .when("/home", {
            templateUrl : 'fragments/home.html',
            controller: 'homeController'
        })
        .when("/productlist",{
            templateUrl : 'fragments/product-list.html',
            controller: 'productController'

        })
        .when("/productdetail",{
            templateUrl : 'fragments/product-detail.html',
            controller: 'detailController'
        })
    }])