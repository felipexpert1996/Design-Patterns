import { Food } from "./Food";
import { Filling } from "./Filling";

export class Pizza extends Food {
    constructor(filling: Filling) {
        super(filling);
    }

    prepareFood(ingredient1?: string, ingredient2?: string): void {
        const desc = this.filling.makeFilling(ingredient1, ingredient2);
        console.log(`Preparing pizza with: ${desc}`);
    }
}