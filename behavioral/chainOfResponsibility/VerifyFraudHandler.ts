import AbstractHandler from "./AbstractHandler";

export class VerifyFraudHandler extends AbstractHandler {
    private maxTransactionAmount: number = 10000;

    public handle(request: any): any {
        if (request.amount > this.maxTransactionAmount) {
            throw new Error('Transaction suspected of fraud.');
        }else {
            return super.handle(request);
        }
    }
}