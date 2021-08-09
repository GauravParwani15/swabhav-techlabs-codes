
function Customer(id,name){
    this.id=id;
    this.name=name;
}

Customer.prototype.getDetails = function(){
    return "name of cutomer is "+this.name+" id of cutomer is "+this.id;
}

var c1 = new Customer(101,"abc");
var c2 = new Customer(102,"pqr");

console.log(c1);
console.log(c2);
console.log(c1.getDetails());
console.log(c2.getDetails());

console.log(c1.__proto__ == Customer.prototype);
console.log(c2.__proto__ == Customer.prototype);
console.log(c1.__proto__ == c2.__proto__);


console.log(Customer.prototype.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);