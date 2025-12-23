export default abstract class GameUnit {

    abstract prepareResources(): void;

    abstract attack(): void;

    enterBattlefield() {
        console.log("The unit entered the battlefield.");
    }

    rest() {
        console.log("Nothing happened during the rest period.");
    }

    endTurn() {
        console.log("Shift completed.\n");
    }

    executeRun() {
        this.enterBattlefield();
        this.prepareResources();
        this.attack();
        this.rest();
        this.endTurn();
    }

}