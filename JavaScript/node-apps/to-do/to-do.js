
var input = document.getElementById("myInput");
var button = document.getElementById("button");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        newElement();
    }
});

button.addEventListener('click', newElement);
var tasks = [];

tasks=JSON.parse(localStorage['listItems']);
addToList();

function newElement(){
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
    alert("task name cant be empty!");
    return;
  }
    tasks.unshift(inputValue);
    localStorage.setItem('listItems', JSON.stringify(tasks));
    location.reload();
    addToList();
}

function addToList(){
    for(let i=0; i<tasks.length ; i++){
        listElements(tasks[i],i);
    }
}

function listElements(inputValue, index){
    var list = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    list.appendChild(textNode);
   
    document.getElementById("myUL").appendChild(list);
  
    document.getElementById("myInput").value = "";
  
    var button = document.createElement("button");
    var txt = document.createTextNode(" delete ");
    button.className = "close";
    button.id=index;
    button.appendChild(txt);
    list.appendChild(button);

    button.addEventListener("click", function(event) {
        for(var j = this.id; j > 0 ; j--){
            tasks[j]=tasks[j-1];
        }
        tasks.shift();
        localStorage.setItem('listItems', JSON.stringify(tasks));
        location.reload();
    });
}