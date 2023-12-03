import Warrior from './warrior';

export default class Fec extends Warrior {
    constructor(
        name: string,
        health: number,
        ) {
        super(name, health);

        this.name = "Fec";
        this.health = 50;
        }



   }

   
    