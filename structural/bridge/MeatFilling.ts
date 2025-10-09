import { Filling } from "./Filling";

export class MeatFilling implements Filling {
    makeFilling(ingredient1 = 'meat', ingredient2 = 'seasoning'): string {
        return `meat with ${ingredient1} and ${ingredient2}`;
    }
}