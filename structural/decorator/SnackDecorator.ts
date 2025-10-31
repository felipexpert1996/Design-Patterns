import { Snack } from './Snack';

export class SnackDecorator implements Snack {
    constructor(protected snack: Snack) {}

    addMeat(): string {
        return this.snack.addMeat() + " Adding extra meat.";
    }

    addLettuce(): string {
        return this.snack.addLettuce() + " Adding extra lettuce.";
    }

    addTomato(): string {
        return this.snack.addTomato() + " Adding extra tomato.";
    }
}