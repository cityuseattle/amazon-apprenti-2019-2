import { Alexa } from './Alexa';

type Power = 'Gasoline' | 'Electric' | 'Hybrid';

interface Machine {
    isOn(): boolean;
}

export class Vehicle implements Machine{
    constructor(
        private started: boolean,
        private seat: number,
        private power: Power,
        private speed: number
    ) {
        started = true;
    }


    isOn() {
        return this.started; 
    }

    getSeat() {
        return this.seat; 
    }

    getPower() {
        return this.power;
    }

    getSpeed() {
        return this.speed; 
    }

    setSpeed(speed: number) {
        // input validation can be done here
        // ...
    
    this.speed = speed;
    }
}

export class Car extends Vehicle {
    drift() {
        Alexa.play('Deja Vu');
    }
}
export class Motorcycle extends Vehicle {
    // ...
}