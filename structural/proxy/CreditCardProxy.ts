import { Payment } from "./Payment";
import { Bank } from "./Bank";

export class CreditCardProxy implements Payment {
    private bank: Bank;
    private creditLimit: number;

    constructor(bank: Bank, creditLimit: number) {
        this.bank = bank;
        this.creditLimit = creditLimit;
    }

    makePayment(amount: number): string {
        if (amount > this.creditLimit) {
            return `Payment of ${amount} exceeds credit limit of ${this.creditLimit}.`;
        }
        return this.bank.makePayment(amount);
    }
}