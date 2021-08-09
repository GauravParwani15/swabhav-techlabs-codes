interface ICustomer {
    id:number,
    firstName:String,
    lastName:String,
    location?:String
}

function printInfo(customers:ICustomer[]){
    for(let c of customers){
        console.log(c.firstName);
    }

}

printInfo([
    {id:101,firstName:'Gaurav',lastName:'Parwani'},
    {id:102,firstName:'Raj',lastName:'Motwani'},
    {id:103,firstName:'Ankit',lastName:'Dhera',location:'Mumbai'}
]);