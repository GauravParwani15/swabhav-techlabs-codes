var app = angular.module('toggle',[])
    app.controller('MainController',['$scope',function($scope){


        $scope.toggle=function (){
        
        
        if(document.querySelector('#myImage')) {
            angular.element(document.querySelector('#myImage')).remove();
            console.log("image removed");
            return;
    }


        const image = document.createElement("img");
        image.src="image.jpeg"; image.height=500; image.width=1000;
        image.id="myImage";
        const element = document.getElementById("container");
        element.appendChild(image);
    }

    }])


