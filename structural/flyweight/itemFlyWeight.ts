export class ItemFlyWeight {
    private code: string;
    private name: string;
    private price: number;

    constructor(name: string, price: number, code: string) {
        this.name = name;
        this.price = price;
        this.code = code;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getCode(): string {
        return this.code;
    }
}