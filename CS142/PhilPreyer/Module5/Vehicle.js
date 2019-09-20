"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Alexa_1 = require("./Alexa");
var Vehicle = /** @class */ (function () {
    function Vehicle(started, seat, power, speed) {
        this.started = started;
        this.seat = seat;
        this.power = power;
        this.speed = speed;
        started = true;
    }
    Vehicle.prototype.isOn = function () {
        return this.started;
    };
    Vehicle.prototype.getSeat = function () {
        return this.seat;
    };
    Vehicle.prototype.getPower = function () {
        return this.power;
    };
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    Vehicle.prototype.setSpeed = function (speed) {
        // input validation can be done here
        // ...
        this.speed = speed;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drift = function () {
        Alexa_1.Alexa.play('Deja Vu');
    };
    return Car;
}(Vehicle));
exports.Car = Car;
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
exports.Motorcycle = Motorcycle;
