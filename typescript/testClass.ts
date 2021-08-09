class Customer{

    _id:number
    _firstName:String
    _lastName:String

    constructor(id:number,firstName:String,lastName:String){
        this._id=id;
        this._firstName=firstName;
        this._lastName=lastName;
    }

    get Id(){
        return this._id;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set firstName(name:String){
        this._firstName=name;
    }

}


let c1 = new Customer(101,"abc","pqr");
console.log(c1._id);
console.log(c1._firstName);
c1._firstName="ABC";
console.log(c1._firstName);