
const frequency = {};
rollDice(10);

function rollDice(timesToRoll){

   

    for(let i=0;i<timesToRoll;i++){
         let randomNumber = Math.ceil( Math.random()*6 );

        if(frequency[randomNumber])
            frequency[randomNumber]+=1;
        else
            frequency[randomNumber]=1;
    }

    console.log(frequency);

}           