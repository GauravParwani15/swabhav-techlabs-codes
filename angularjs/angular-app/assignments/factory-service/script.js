
var app = angular.module('todoapp',[]);

app.service("todoListService",function () {
    this.toDoList=[];
     this.addTodo = function(){
        console.log("adding to do using service");
     }
     this.removeTodo = function (){
                console.log("removing from to do using service");
     }

})

app.factory("todoListFactory",function(){
    var obj ={}
    obj.toDoList=[];
    
    obj.addTodo = function(){
                console.log("adding to do using factory");
     }
     obj.removeTodo = function (){
                console.log("removing from  to do using service");
     }
     return obj;

})

app.controller("todoCtrl",function(todoListService,todoListFactory){
    todoListService.addTodo();
    todoListFactory.addTodo();
    todoListService.removeTodo();
    todoListFactory.removeTodo();
})
