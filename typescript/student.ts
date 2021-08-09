export class Student {

    constructor(private firstName:String,private lastName:String){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get fullName(){
        return this.firstName+"  "+this.lastName;
    }

}

export class Address{

    constructor(private location,private city){
        this.location=location;
        this.city=city;
    }

    get Address(){
        return this.location+"  "+this.city;
    }

    

}