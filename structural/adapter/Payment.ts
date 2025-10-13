export interface Payment {
    processPayment(amount: number, account: string): string;
}