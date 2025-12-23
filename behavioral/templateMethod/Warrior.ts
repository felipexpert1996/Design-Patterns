import GameUnit from "./GameUnit";

export default class Warrior extends GameUnit {
    prepareResources(): void {
        console.log("Warrior raises his shield.");
    }
    attack(): void {
        console.log("Warrior attacks with his sword!");
    }

}