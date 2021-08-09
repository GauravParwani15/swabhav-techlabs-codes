let p = new Promise( function(resolve, reject){
  setTimeout(function(){
    resolve({ 
      id: 1, 
      name: 'Gaurav', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
});

let q =  new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(['movie1', 'movie2']);
        }, 4000);
});

let r =  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
      }, 4000);
});


p.then(function(result) {
    console.log("customer",result);
    if(result.isGold){
        q.then(function(result) {
            console.log('Top movies: ', result);
            r.then(function() {
                console.log('Email sent...')
            })
        })
    }
});
