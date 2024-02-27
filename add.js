var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var test1 = new Person("Jean-terre", 25);
test1.tellMyName();
test1.tellMyAge();
var test2 = new Person("Marie-madeleine", 156);
test2.tellMyName();
test2.tellMyAge();
