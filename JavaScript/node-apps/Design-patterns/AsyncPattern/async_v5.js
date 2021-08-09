var helloBtn = document.getElementById("hello");
var asyncBtn = document.getElementById("async");
var syncBtn = document.getElementById("sync");

helloBtn.addEventListener("click",function(){
     const para = document.createElement("p");
        const node = document.createTextNode("Hello");
        para.appendChild(node);

        const element = document.getElementById("printasync");
        element.appendChild(para);

});

asyncBtn.addEventListener("click",function(){
   var  w = new Worker("webworker.js");
     w.onmessage = function(event) {
        const para = document.createElement("p");
        const node = document.createTextNode(event.data);
        para.appendChild(node);

        const element = document.getElementById("printasync");
        element.appendChild(para);
    };
});

syncBtn.addEventListener("click",function(){



        (function () {
            
        while(true){
            const para = document.createElement("p");
            const node = document.createTextNode("Sync");
            para.appendChild(node);

            const element = document.getElementById("printsync");
            element.appendChild(para);
        }
        }());

});