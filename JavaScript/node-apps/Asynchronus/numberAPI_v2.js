// import moment from 'moment';
// import { moment } from "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js";
// import moment from "./moment.js";
var number = document.getElementById("input")
var xhr = new XMLHttpRequest();
var factValue=document.getElementById("fact-value");
var factText=null;
var factArray =[];

class facts{
    constructor(number,fact,time,isDeleted){
        this.number=number;
        this.fact=fact;
        this.time=time;
        this.isDeleted=isDeleted;
    }
}

loadTable();
// console.log(moment(Date.now()));

document.getElementById("button").addEventListener("click", function(){

    
    if(getStorage()){
        loadTable();
        factArray=getStorage();
    }

    if(!number.value){
        alert("Enter a Value");
        return;
    }


    xhr.addEventListener("load", function(){
        console.log(xhr.responseText)
        factValue.innerHTML=xhr.responseText;
        factText=xhr.responseText;
        
        var f1 = new facts(number.value,factText,Date.now(),false);

        if(checkIfPresent(f1)){
            factArray.unshift(f1);
            setStorage(factArray);   
            console.log(localStorage.getItem('factArray'));
        }
        loadTable();
        
        
    })
    xhr.open("GET","http://numbersapi.com/"+number.value);
    xhr.send();
    
    
})  


function loadTable(){
    var elements = getStorage();
    var table=document.getElementById("table");

     while( table.firstChild ){
            table.removeChild( table.firstChild );
     }
      

    if(elements){
    for (var i=0; i<elements.length; i++){

    if(!elements[i].isDeleted){
       var tr = document.createElement('TR');
       table.appendChild(tr);
       

       (function(){
        var td = document.createElement('TD');
        td.width='75';
        td.appendChild(document.createTextNode(elements[i].number));
        addStyle(tr,elements[i].number);
        tr.appendChild(td);
       })();

       (function(){
        var td = document.createElement('TD');
        td.width='75';
        td.appendChild(document.createTextNode(elements[i].fact));
        tr.appendChild(td);
       })();

       (function(){
        var td = document.createElement('TD');
        td.width='75';

        console.log(elements[i].time);
        var relativeTime =moment((elements[i].time)).fromNow();
        console.log(relativeTime);
        td.appendChild(document.createTextNode("Searched "+relativeTime));
        tr.appendChild(td);
       })();


    //    (function(){
    //         var td = document.createElement('TD');
    //         td.width='75';
    //         var button = document.createElement("button");
    //         var txt = document.createTextNode(" delete ");
    //         button.className = "close";
    //         button.id=elements[i].isDeleted;
    //         button.appendChild(txt);
    //         td.appendChild(button);
    //         tr.appendChild(td);

    //         button.addEventListener("click", function(event) {
    //             console.log(elements[i]);
    //             // elements[i].isDeleted=true;
    //             // tasks.shift();
    //             // localStorage.setItem('listItems', JSON.stringify(tasks));
    //             // location.reload();
    //         });    

    //    })();

    }

    }
}
}

function addStyle(tr,number){
    if(number%2==0)
        tr.classList.add("even");
    else 
        tr.classList.add("odd");
}

function setStorage(factArray){
    localStorage.setItem("factArray",JSON.stringify(factArray));
}
function getStorage(){

    return JSON.parse(localStorage.getItem('factArray'));
}

function loadStorage(){
    0
}

function checkIfPresent(f1){
    var elements = getStorage();
    if(elements){
        for(let i=0;i<elements.length;i++){
        if(elements[i].fact===f1.fact)
            return false;
        }
    }
    
    return true;
} 
  

// (function()
// {
//   // instantiate a moment object
//   var NowMoment = moment();
  
//   // instantiate a JavaScript Date object
//   var NowDate = new Date();
  
//   // display value of moment object in #displayMoment div
//   var eDisplayMoment = document.getElementById('displayMoment');
//   eDisplayMoment.innerHTML = NowMoment;
  
//   // display value of Date object in #displayJsDate div
//   var eDisplayDate = document.getElementById('displayJsDate');
//   eDisplayDate.innerHTML = NowDate;
// })();
