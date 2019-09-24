import { Street } from './Street';
import { Car, Motorcycle } from './Vehicle';

let wallStreet = new Street('Wall street', 25 3, false);

let tesla = [ new Car(true, 5, 'Electric', 20) ];
let toyota = [ new Car(true, 5, 'hybrid', 25), new Car(true, 5, 'Gasoline', 22) ];
let honda =[ new Motorcylce(true, 1, 'Gasoline', 23) ];

wallStreet.increaseTraffic(tesla.length + toyota.length + honda.length);

toyota[1].setspeed(70);
toyota[1].drift();