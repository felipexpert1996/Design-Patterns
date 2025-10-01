import { Delivery } from "./delivery";

export class Truck implements Delivery {
    deliver(address: string): void {
        console.log(`Delivering ${address} by truck`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the truck`);
    }
}