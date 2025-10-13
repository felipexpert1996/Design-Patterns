import { Pagseguro } from "./Pagseguro";
import { Payment } from "./Payment";

export class PagseguroAdapter implements Payment {

    private pagseguro: Pagseguro;

    constructor(email: string, currency: string) {
        this.pagseguro = new Pagseguro(email, currency);
    }

    processPayment(amount: number, account: string): string {
        return this.pagseguro.makeTransaction(amount, account);
    }
}
