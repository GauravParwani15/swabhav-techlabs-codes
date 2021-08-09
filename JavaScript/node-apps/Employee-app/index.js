var xhr = new XMLHttpRequest();
var csv

function loadData(){
    xhr.addEventListener("load",processData);
    xhr.open("POST","https://swabhav-tech.firebaseapp.com/emp.txt",true);
    xhr.send();
}

function processData() {
    var childrens;
    csv = xhr.responseText.split("\n");
    for(let i=0;i<csv.length;i++){
        var empData = csv[i].split(",");
        var employee = {
            id : empData[0],
            name : empData[1].substring(1, empData[1].length),
            designation: empData[2].substring(1,empData[2].length),
            managerId:empData[3],
            DOJ : empData[4].substring(1,empData[4].length),
            salary:empData[5],
            commission: empData[6],
            deptId:empData[7]
        }
        console.log(hiearchyMap.get(empData[3]));
        childrens = hiearchyMap.get(empData[3]);
        if(childrens == undefined)
        {
            childrens = new Set();
        }
        childrens.add(empData[0]);

        hiearchyMap.set(empData[3],childrens);
        empDataMap.set(empData[0],employee);
    }
    bosses = Array.from(hiearchyMap.get("NULL"));
    renderHierarchy();
}

function renderHierarchy(){
    var childrens=[];
    let div = document.createElement("div");
    div.id = ++level;
    console.log(bosses)
    for(let i=0;i<bosses.length;i++){
        let button = document.createElement("button");
        button.id=empDataMap.get(bosses[i]).id;
        button.innerHTML=empDataMap.get(bosses[i]).name;
        button.addEventListener("click",function(e){ printSubordinateDetails(e); })
        div.appendChild(button);
        let set = hiearchyMap.get(bosses[i]);
        if( set == undefined)
        {
            hasChildren=false;
            continue;
        }
        hasChildren=true;
        let array = Array.from(set);
        for(let j=0;j<array.length;j++){
            childrens.push(array[j]);
        }
        document.body.appendChild(div);
        document.body.appendChild(document.createElement("br"));
        bosses=childrens;
        if(hasSubordinates)
        {
            renderHierarchy()
        }
        
    }
}

function printSubordinateDetails(e){
    let paragraph = document.getElementById("emp-details");
    document.body.removeChild(paragraph);
    let newParagraph = document.createElement("h4");
    newParagraph.id = "emp-details";
    let emp = empDataMap.get(e.currentTarget.id);
    newParagraph.innerHTML = JSON.stringify(empDataMap.get(emp.managerId));
    document.body.appendChild(newParagraph);
}

var hasSubordinates;
var bosses;
var level = -1;
var hiearchyMap=new Map();
var empDataMap=new Map();
var dataPar = document.getElementById("data");
var getButton = document.getElementById("get-btn");
getButton.addEventListener("click",loadData)