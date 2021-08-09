function printInfo(customers) {
    for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
        var c = customers_1[_i];
        console.log(c.firstName);
    }
}
printInfo([
    { id: 101, firstName: 'Gaurav', lastName: 'Parwani' },
    { id: 102, firstName: 'Raj', lastName: 'Motwani' },
    { id: 103, firstName: 'Ankit', lastName: 'Dhera', location: 'Mumbai' }
]);
