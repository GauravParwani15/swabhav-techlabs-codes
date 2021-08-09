var button = document.getElementById("button");

button.addEventListener('click',  function() {
    value=Math.floor((Math.random() *100)+1);
    showNumber(value).then(function(result) {
        document.getElementById('fact').innerText = result.success;
    }).catch(function(result) {
        console.log(result.error);
    });
});

function showNumber(value){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "http://numbersapi.com/"+value )
        xhr.onload = function() {
            var result = xhr.responseText;
            resolve({success: result});
        }
        xhr.onerror =function() {
            reject({error : "Something is wrong"});
        } 
        xhr.send();
    })
}
console.log("End Of Main");
