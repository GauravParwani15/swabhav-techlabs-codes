"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this.firstName + "  " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
var Address = /** @class */ (function () {
    function Address(location, city) {
        this.location = location;
        this.city = city;
        this.location = location;
        this.city = city;
    }
    Object.defineProperty(Address.prototype, "Address", {
        get: function () {
            return this.location + "  " + this.city;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
