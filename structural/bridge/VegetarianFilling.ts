import { Filling } from "./Filling";

export class VegetarianFilling implements Filling {
    makeFilling(ingredient1 = 'veggies', ingredient2 = 'herbs'): string {
        return `vegetarian with ${ingredient1} and ${ingredient2}`;
    }
}
