var app = angular.module('myApp', []);
app.controller('validateCtrl', ["$scope","$log","getDetails","setDetails","$http",function($scope,$log,getDetails,setDetails,$http) {
    
    $scope.user={
        name:'',
        age:'',
        roll:'',
        Gender:"",
        email:'',
        date:''
    };

    $scope.putDetailsInForm=function(student){
        if(student.isMale){
            $scope.user={
                name:student.name,
                age:student.age,
                roll:student.rollNo,
                Gender:"Male",
                email:student.email,
                date:student.date
            };
        }
        else {
            $scope.user={
                name:student.name,
                age:student.age,
                roll:student.rollNo,
                Gender:"Female",
                email:student.email,
                date:student.date
            };
        }
        $scope.myForm.name=student.name;
        $scope.myForm.age=student.age;
        console.log($scope.forms.myForm.name);
    }



    $scope.checkHandler = function(){

         getDetails.getDetails()
         .then(function(result){
             $scope.students = result.data;
             console.log($scope.students[1])
          })
          .catch(function(err){
            console.log(err)
          })

        console.log("end of handler");
    }


    $scope.setDetails= function(){
        var setStudent = {}
        setStudent= {
            name:$scope.myForm.name.$modelValue,
            age:$scope.myForm.age.$modelValue,
            rollNo:$scope.myForm.roll.$modelValue,
            gender:$scope.myForm.Gender.$modelValue,
            Email:$scope.myForm.email.$modelValue,
            date:$scope.myForm.date.$modelValue
        }
        console.log(setStudent);
        var json = JSON.stringify(setStudent);
        console.log(json)
        $http({
            method: 'POST',
            url: 'http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/',
            data: json,
            headers: {'Content-Type': 'application/json'}
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err)
        })
        // setDetails.setDetails();
    }



    $scope.deleteStudent = function(id){
        console.log(id)
        $http.delete("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/"+id)
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err)
        })
        $scope.checkHandler
    }


}]);

app.service('setDetails',['$log',"$http","$q",function($log,$http,$q,student){

    // console.log(setStudent)
    //     setStudent.setDetails=function(setStudent){
    //         var json = JSON.stringify(setStudent);
    //         console.log(json)
        

    // }

}])


app.factory('getDetails',['$log',"$http","$q",function($log,$http,$q){
    var students={}

    students.getDetails= function(){
        return ($q(function(resolve,reject){
            $http.get("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students")
            .then(function(response){
                students=response;
                console.log(response.data[1]);
                resolve(response);
            })
            .catch(function(err){
                console.log(err)
            })
        }))
    }
    return students;

}])