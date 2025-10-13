export class Paypal {
    email: string;
    currency: string;

    constructor(email: string, currency: string) {
        this.email = email;
        this.currency = currency;
    }

    makePayment(amount: number, account: string): string {
        return `Processing PayPal payment of ${amount} ${this.currency} for ${this.email} with account ${account}`;
    }
}
