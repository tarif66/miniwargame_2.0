import Warrior from './warrior';

export default class Stormcast extends Warrior {
    constructor(
        name: string,
        health: number,
        ) {
        super(name, health);

        this.name = "Stormcast";
        this.health = 70;
        }

    }
   


    