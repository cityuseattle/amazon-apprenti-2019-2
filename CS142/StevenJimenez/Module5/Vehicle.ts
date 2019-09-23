import { Alexa } from './Alexa';

type Power = 'Gasonline' | 'Electirc' | 'Hybrid';

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

    getspeed() {
        return this.power;
    }
}

