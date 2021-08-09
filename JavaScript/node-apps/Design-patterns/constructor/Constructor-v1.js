function Customer(id,name){
    console.log(this);
    var _id,_name;

    if(id>0){
        _id=id;
    }

    if(name.length>0){
        _name=name;
    }

    this.fooo="I am foo, just to test"
    this.setName = function(name){
        if(name.length>0){
            console.log(name);
            _name=name;
        }
    }

    this.getName = function(){
        return _name;
    }

    this.getId = function(){
        return _id;
    }

}

var c1= new Customer(101,"xyz");

console.log(c1);
console.log({c1})

c1.setName("Raj");

console.log({c1});
console.log(c1.getName);
console.log(c1.fooo);
console.log({c1});

