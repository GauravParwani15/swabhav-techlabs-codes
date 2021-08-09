
var input = document.getElementById("myInput");
var button = document.getElementById("button");

class Task {
    constructor(name) {
      this.name = name;
      this.id = Date.now();
      this.deleted=false;
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
var deletedList = [];

var taskList = document.getElementById("taskList");
var toDoListItemsStorage = localStorage.getItem('taskListStorage');
var deletedItemsStorage = localStorage.getItem('deletedItems');

if(toDoListItemsStorage !== null){
    toDoList = JSON.parse(toDoListItemsStorage);
}
if(deletedItemsStorage !== null){
    deletedList = JSON.parse(deletedItemsStorage);
}
listAll();

function listAll(){
    for(let i=0; i<toDoList.length ; i++){
        listoutElement(toDoList[i],i);
    }
}


function listoutElement(Task, index){
    if(Task.deleted){
        return
    }
    var li = document.createElement("li");
    var closeButton = document.createElement("button");
    var txt = document.createTextNode("X");
    closeButton.className = "close";
    closeButton.id=index;
    closeButton.appendChild(txt);
    li.appendChild(closeButton);
    var t = document.createTextNode(Task.name);
    li.appendChild(t);
    taskList.appendChild(li);

    closeButton.addEventListener("click", onCloseButton);
}


function newElement(){
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("task name cant be empty");
      } else {
        toDoList.unshift(new Task(inputValue));
        localStorage.setItem('taskListStorage', JSON.stringify(toDoList));
        input.value = "";
        clearAll();
        listAll();
      }
}

function onCloseButton(){
    toDoList[this.id].deleted=true;
    deletedList.unshift(toDoList[this.id]);
    localStorage.setItem('deletedItems', JSON.stringify(deletedList));
    for(var j = this.id; j > 0 ; j--){
        toDoList[j]=toDoList[j-1];
    }
    toDoList.shift();
    localStorage.setItem('taskListStorage', JSON.stringify(toDoList));
    clearAll();
    listAll();
}

function clearAll(){
    while( taskList.firstChild ){
        taskList.removeChild( taskList.firstChild );
    }
}
