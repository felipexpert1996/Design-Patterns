import { Barman } from "./barman";
import { OrderCommand } from "./orderCommand";

export class PrepareCocktailCommand implements OrderCommand {
    private barman: Barman;

    constructor(barman: Barman) {
        this.barman = barman;
    }

    execute(): void {
        this.barman.prepareCocktail();
    }
}