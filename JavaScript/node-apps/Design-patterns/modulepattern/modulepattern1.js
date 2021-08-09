function makeCustomer(){
    var customer = {}
    var _id,_name;

    customer.setId = function(id){
        this._id=id;
    }

    customer.setName = function(name){
        this._name=name;
    }

    customer.getDetails = function(){
        return "Name of customer is " + this._name + " id of customer is " + this._id ;
    }

    return customer;

}


var c1 = makeCustomer();
c1.setId(101);
c1.setName("Gaurav");
console.log(c1.getDetails());
console.log(c1);