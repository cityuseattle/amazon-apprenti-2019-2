export class Street {
    private traffic:number;

    constructor(
        private name: string,
        private speedLimit: number,
        private lane: number,
        private isTwoWay: boolean
    ) { 
        this.traffic = 0;
    }

    getName() {
        return this.name;
    }

    setTraffic(traffic: number) {
        this.traffic = traffic;
    }
    increaseTraffic(num: number) {
        this.traffic += num;
    }

    reducetraffic(num: number) {
        this.traffic = (this.traffic - num > 0) ? (this.traffic - num) : 0;
     }

     printTraffic() {
         console.log(`There are ${this.traffic} vehicles on ${this.name}. `); 
     }
}