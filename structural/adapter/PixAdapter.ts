import { Pix } from "./Pix";
import { Payment } from "./Payment";

export class PixAdapter implements Payment {

    private pix: Pix;

    constructor(currency: string) {
        this.pix = new Pix(currency);
    }

    processPayment(amount: number, account: string): string {
        return this.pix.sendTransaction(amount, account);
    }
}

