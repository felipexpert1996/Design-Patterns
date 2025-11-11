export class Item {
    private table: string;
    private hour: number;
    private minute: number;
    private quantity: number;

    constructor(table: string, hour: number, minute: number, quantity: number) {
        this.table = table;
        this.hour = hour;
        this.minute = minute;
        this.quantity = quantity;
    }

    getTable(): string {
        return this.table;
    }

    getHour(): string {
        return `${this.hour}:${this.minute}`;
    }

    getQuantity(): number {
        return this.quantity;
    }
}