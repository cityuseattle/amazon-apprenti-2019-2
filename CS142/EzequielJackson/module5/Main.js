"use strict";
exports.__esModule = true;
mport;
{
    Street;
}
from;
'./Street';
var Vehicle_1 = require("./Vehicle");
var wallStreet = new Street('Wall Street', 25, 3, false);
var tesla = [new Vehicle_1.Car(true, 5, 'Electric', 20)];
var toyota = [new Vehicle_1.Car(true, 5, 'Hybrid', 25), new Vehicle_1.Car(true, 5, 'Gasoline', 22)];
var honda = [new Vehicle_1.Motorcycle(true, 1, 'Gasoline', 23)];
wallStreet.increaseTraffic(tesla.length + toyota.length + honda.length);
wallStreet.printTraffic();
toyota[1].setSpeed(70);
toyota[1].drift();