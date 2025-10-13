import { Paypal } from "./Paypal";
import { Payment } from "./Payment";

export class PaypalAdapter implements Payment {

    private paypal: Paypal;

    constructor(email: string, currency: string) {
        this.paypal = new Paypal(email, currency);
    }

    processPayment(amount: number, account: string): string {
        return this.paypal.makePayment(amount, account);
    }
}
