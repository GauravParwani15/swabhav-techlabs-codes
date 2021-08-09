
var input = document.getElementById("myInput");
var button = document.getElementById("button");

class Task {
    constructor(name) {
      this.name = name;
      this.id = Date.now();
    }
}

button.addEventListener('click', newElement);
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        newElement();
    }
});


var toDoList = [];

var taskList = document.getElementById("taskList");

listAll();

function listAll(){
    for(let i=0; i<toDoList.length ; i++){
        listoutElement(toDoList[i],i);
    }
}


function listoutElement(Task, index){
    var li = document.createElement("li");

    var t = document.createTextNode(Task.name);
    li.appendChild(t);
    taskList.appendChild(li);
}


function newElement(){
    var inputValue = document.getElementById("myInput").value;
    toDoList.unshift(new Task(inputValue));
    input.value = "";
    listAll();
}
