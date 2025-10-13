export class Pix {
    currency: string;

    constructor(currency: string) {
        this.currency = currency;
    }

    sendTransaction(amount: number, pixKey: string): string {
        return `Processing Pix transaction of ${amount} ${this.currency} with key ${pixKey}`;
    }
}
