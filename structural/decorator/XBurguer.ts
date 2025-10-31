import { SnackDecorator } from "./SnackDecorator";

export class XBurguer extends SnackDecorator {
    addCheese(): string {
        return super.addMeat() + " Adding cheese.";
    }
}
