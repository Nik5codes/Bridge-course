var Car = /** @class */ (function () {
    function Car(name, model) {
        this.name = name;
        this.model = model;
    }
    Car.prototype.displayInfo = function () {
        console.log("".concat(this.name));
        console.log("".concat(this.model));
    };
    return Car;
}());
var car1 = new Car("bmw", 2020);
car1.displayInfo();
