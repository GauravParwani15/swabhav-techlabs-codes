

class Student{

    constructor(name, cgpa){
    this.name=name;
    this.cgpa=cgpa;
    }

}


var student1 = new Student("gaurav",7.5);
var student2 = new Student("raj",6.5);
var student3 = new Student("shivam",8.5);
var student4 = new Student("vaibhav",8.9);
var student5 = new Student("Anmol",9);

const Students = [student1,student2,student3,student4,student5];

console.log("Sum of cgpa is: "+cgpaSum(Students));
console.log("Average of cgpa is: "+cgpaAvg(Students));
console.log("Max cgpa is: "+cgpaMax(Students));
console.log("Min cgpa is: "+cgpaMin((Students)));



function cgpaSum(Students){
    var cgpaSum=0;

    for(let i=0;i<Students.length;i++){
       cgpaSum += parseFloat( Students[i].cgpa);
    }
    return cgpaSum;
}

function cgpaAvg(Students){
 let cgpaAvg=0;
    for(let i=0;i<Students.length;i++){
       cgpaAvg=((cgpaSum(Students)+parseFloat(Students[i].cgpa))/parseFloat(Students.length));
    }
    return cgpaAvg;
}

function cgpaMax(Students){
 var cgpaMax=-1;

    for(let i=0;i<Students.length;i++){
        if(cgpaMax<0)
            cgpaMax=parseFloat(Students[i].cgpa);
            else if(cgpaMax<parseFloat(Students[i].cgpa))
                cgpaMax=parseFloat(Students[i].cgpa)
    }
    return cgpaMax;
}

function cgpaMin(){
var cgpaMin=-1;

    for(let i=0;i<Students.length;i++){
        if(cgpaMin<0)
            cgpaMin=parseFloat(Students[i].cgpa);
        else if(cgpaMin<parseFloat(Students[i].cgpa))
            cgpaMin=parseFloat(Students[i].cgpa)
    }
    return cgpaMin;
}


console.log("local storage data");
for(let i=0;i<Students.length;i++){
    localStorage.setItem(i,JSON.stringify(Students[i]));
}

for(let i=0;i<Students.length;i++){
    console.log( JSON.parse(localStorage.getItem(i) ) );
}

console.log("session storage data");
for(let i=0;i<Students.length;i++){
    sessionStorage.setItem(i,JSON.stringify(Students[i]));
}

for(let i=0;i<Students.length;i++){
    console.log( JSON.parse(sessionStorage.getItem(i) ) );
}