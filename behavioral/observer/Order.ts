import { Observer } from "./Observer";

export class Order {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notifyAll(data: any): void {
        for (const observer of this.observers) {
            observer.notify(data);
        }
    }

    public payOrder(orderId: string): void {
        console.log(`Order ${orderId} has been paid.`);
        this.notifyAll({ orderId, status: 'paid' });
    }
}