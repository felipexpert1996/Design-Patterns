import { Delivery } from "./delivery";

export class Van implements Delivery {
    deliver(address: string): void {
        console.log(`Delivering ${address} by van`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the van`);
    }
}