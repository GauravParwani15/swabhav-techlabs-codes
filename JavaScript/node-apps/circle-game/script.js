(function () {
    var sliderRange = document.getElementById("sliderRange");
    var sliderVal = document.getElementById("sliderVal");
    sliderRange.oninput = function () {
        
        sliderVal.innerHTML = this.value;
        var holder = document.getElementById('buttonPanel');
        
        while(holder.firstChild){
            holder.removeChild(holder.firstChild);
        }
    
        for(var i = 0; i < this.value; i++){
            var button = document.createElement('button');
            button.className="button";
            button.innerHTML = i;
            button.id = i;
            holder.appendChild(button);
        }
        gameStart()

        function gameStart(){
            var turn = 0

            var buttons = document.getElementsByClassName('button')
            var blueButtonId=Math.floor((Math.random() * ( sliderVal.innerHTML-1)));

            var maxButtons=buttons.length;
            var maxTries = Math.ceil(maxButtons/4)
            var blueButton = buttons[blueButtonId]
            updateRetryCounters(turn,maxTries)
           
            eventHandler(blueButton,blueButtonId,turn,maxTries,buttons);
            
        }

        function eventHandler(blueButton,blueButtonId,turn,maxTries,buttons){

             blueButton.addEventListener("click", function(){
                console.log( "button number:",blueButton.id);
                blueButton.style.backgroundColor="blue"
                alert("You win the game")
                setTimeout(function(){ location.reload() },5000)
                })


            for(let i =0;i<blueButtonId;i++){
                buttons[i].addEventListener("click", function(){
                console.log( "button number:",buttons[i].id);
                buttons[i].style.backgroundColor="red"
                alert("You're behind the Blue ball")
                turn++
                updateRetryCounters(turn,maxTries);
                if(turn >=maxTries){
                    alert("You lose page will reload..!!")
                    setTimeout(function(){  location.reload() },5000)
                }
                })
            }

            for(let i = blueButtonId+1;i<buttons.length;i++){
                buttons[i].addEventListener("click", function(){
                    console.log( "button number:",buttons[i].id);
                    buttons[i].style.backgroundColor="green"
                    alert("Too greater")
                    turn++
                    updateRetryCounters(turn,maxTries);
                    if(turn >= maxTries ){
                        alert("You're ahead ofthe Blue ball")
                        location.reload();
                    }
                    })
            }

        }

        function updateRetryCounters(turn, maxTries){
            document.getElementById("totalRetries").innerHTML = turn
            document.getElementById("retriesLeft").innerHTML = maxTries-turn
        }

    }
})();