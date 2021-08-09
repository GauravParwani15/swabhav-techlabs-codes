



function red(){
    document.body.style.background = "red";
}

function blue(){
    document.body.style.background = "blue";
}

function callBack(call){

    if(call=="red"){
        red();
        console.log("cdcvd")
    }
    else if(call=="blue"){
        blue();
        console.log("aa")
    }
}


function callBack(event){
    console.log(event);
}


var btn= document.getElementsByClassName("btn")
// btn.addEventListener("click", callBack  );
console.log(btn);

for(let i=0;i<btn.length;i++){
    var colour = btn[i].innerText.toLowerCase();
    
    if(btn[i].innerText === "red")
        btn[i].addEventListener("click", red );
    if(btn[i].innerText === "blue")
        btn[i].addEventListener("click", blue );

}
