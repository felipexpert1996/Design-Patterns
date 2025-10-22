import { Payment } from "./Payment";

export class Bank implements Payment {
    makePayment(amount: number): string {
        return `Payment of ${amount} made through Bank.`;
    }
}
