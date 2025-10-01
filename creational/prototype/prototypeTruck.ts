import { Prototype } from "./prototype";

export class TruckPrototype implements Prototype {

    private color;
    private type;

    constructor(color: string, type: string){
        this.color = color;
        this.type = type;
    }

    clone(): this {
        const clone = Object.create(this);
        return clone;
    }

}