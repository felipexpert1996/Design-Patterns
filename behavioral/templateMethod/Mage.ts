import GameUnit from "./GameUnit";

export default class Mage extends GameUnit {
    prepareResources(): void {
        console.log("The wizard gathers magical energy.");
    }
    attack(): void {
        console.log("The wizard throws a fireball!");
    }

    rest(): void {
        console.log("The mage meditates and recovers mana.");
    }
}