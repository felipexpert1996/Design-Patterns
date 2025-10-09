import { Filling } from "./Filling";

export class ChickenFilling implements Filling {
    makeFilling(ingredient1 = 'chicken', ingredient2 = 'spices'): string {
        return `chicken with ${ingredient1} and ${ingredient2}`;
    }
}