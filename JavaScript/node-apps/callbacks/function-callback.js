function isOdd(number){
    return number%2 != 0;
}

function isEven(number){
    return number%2 == 0;
}

function noGreaterThan25(number){
    return number>25;
}

function filterNumbers(array, callback){
    var returnArray=[];
    for(let i=0;i<array.length;i++){
        if(callback(array[i]))
            returnArray.push( (array[i]) );
    }
    return returnArray;
}

var numbers = [10,20,30,40,51];

console.log( filterNumbers(numbers,noGreaterThan25  ) );
console.log( filterNumbers(numbers,isOdd  ) );
console.log( filterNumbers(numbers,isEven  ) );