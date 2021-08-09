 document.getElementById("slider")
    .oninput=  function(e){
    var value = document.getElementById("value");
    var number = e.target.value;
     var holder = document.getElementById("buttonholder");
    value.innerHTML = number;
    console.log(number);

     while (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

     for(let i=1;i<=number;i++){
        var btn = document.createElement("BUTTON");  
        btn.innerHTML = i;
        btn.className="button";
        btn.value = i;
        holder.appendChild(btn); 
    }

    var buttons = document.getElementsByClassName("button")
    for(let i =0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
       console.log( "I am button: "+buttons[i].value );
    
    })
}};


