import { Snack } from "./Snack";

export class Hamburguer implements Snack {
    addMeat(): string {
        return "Adding meat to the hamburguer.";
    }

    addLettuce(): string {
        return "Adding lettuce to the hamburguer.";
    }

    addTomato(): string {
        return "Adding tomato to the hamburguer.";
    }
}
