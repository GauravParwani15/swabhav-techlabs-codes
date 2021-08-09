var number = document.getElementById("input")
var xhr = new XMLHttpRequest();
var factValue=document.getElementById("fact-value");


document.getElementById("button").addEventListener("click", function(){

    if(typeof number.value == 'number'){
        console.log(hello);
    }
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText)
        factValue.innerHTML=xhr.responseText;
    })
    xhr.open("GET","http://numbersapi.com/"+number.value);
    xhr.send();
    console.log("End of program");
    
})    