var numbers = [10,20,30,40,51];

function mapNumbers(array, callback)
{
    var returnArray=[];

    for(let i=0;i<array.length;i++){
        returnArray[i]=(callback(array[i]));
    }
    return returnArray;
}

 function square(number){
        return number*number
    }

    function cube(number){
        return number * number * number;
    }

    function add10(number){
        return number+10;
    }

    console.log( mapNumbers(numbers, square) );

    console.log( mapNumbers(numbers, cube) );

    console.log( mapNumbers(numbers, add10) );