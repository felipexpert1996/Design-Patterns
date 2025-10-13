export class Pagseguro {    
    email: string;
    currency: string;

    constructor(email: string, currency: string) {
        this.email = email;
        this.currency = currency;
    }

    makeTransaction(amount: number, account: string): string {
        return `Processing PagSeguro transaction of ${amount} ${this.currency} for ${this.email} with account ${account}`;
    }
}
