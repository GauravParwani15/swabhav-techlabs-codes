spa.controller()

    .service('productService',["$scope",function($scope){
        var product;
        console.log(product)
    }])

    .controller('homeController',[function(){
        var developerName="Gaurav Parwani"
    }])

    

    .controller('productController',["$scope","$http","$rootScope",function($scope,$http,$rootScope){


        $http.get('products.json').success(function (data){
		$scope.products = data;
        console.log($scope.products)
	    });

        $scope.myVar=true;
        $scope.toggleImages = function(){
            if($scope.myVar==true){
                console.log($scope.myVar)
                $scope.myVar=false;
                return;
            }
            $scope.myVar=true;
                
        }

        $rootScope.products=$scope.products;
        // productService.product=products[1];

        $scope.loadProduct=function(product){
            console.log(product)
            $rootScope.product=product;
            console.log("Vdv")
        }


    }])


    .controller('detailController',["$rootScope",function($rootScope){
 
        var product=$rootScope.product;
               console.log(product)
    }])



.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});