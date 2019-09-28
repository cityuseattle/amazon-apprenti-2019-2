"use strict";
exports.__esModule = true;
var Street = /** @class */ (function () {
    function Street(name, speedLimit, lane, isTwoWay) {
        this.name = name;
        this.speedLimit = speedLimit;
        this.lane = lane;
        this.isTwoWay = isTwoWay;
        this.traffic = 0;
    }
    Street.prototype.getName = function () {
        return this.name;
    };
    Street.prototype.getTraffic = function () {
        return this.traffic;
    };
    Street.prototype.setTraffic = function (traffic) {
        this.traffic = traffic;
    };
    Street.prototype.increaseTraffic = function (num) {
        this.traffic += num;
    };
    Street.prototype.reduceTraffic = function (num) {
        this.traffic = (this.traffic - num > 0) ? (this.traffic - num) : 0;
    };
    Street.prototype.printTraffic = function () {
        console.log("There are " + this.traffic + " vehicles on " + this.name + ".");
    };
    return Street;
}());
exports.Street = Street;
