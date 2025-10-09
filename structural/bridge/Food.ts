import { Filling } from "./Filling";

export abstract class Food {
    protected filling: Filling;

    constructor(filling: Filling) {
        this.filling = filling;
    }

    abstract prepareFood(ingredient1?: string, ingredient2?: string): void;
}