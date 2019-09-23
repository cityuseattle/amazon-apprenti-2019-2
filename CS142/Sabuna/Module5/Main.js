"use strict";
exports.__esModule = true;
var Street_1 = require("./Street");
var Vehicles_1 = require("./Vehicles");
var wallStreet = new Street_1.Street('Wall Street', 25, 3, false);
var tesla = [new Vehicles_1.Car(true, 5, 'Electric', 20)];
var toyota = [new Vehicles_1.Car(true, 5, "Hybrid", 25), new Vehicles_1.Car(true, 5, 'Gasoline', 22)];
var honda = [new Vehicles_1.Motorcycle(true, 1, 'Gasoline', 23)];
wallStreet.increaseTraffic(tesla.length + toyota.length + honda.length);
wallStreet.printTraffic();
toyota[1].setSpeed(70);
toyota[1].drift();
