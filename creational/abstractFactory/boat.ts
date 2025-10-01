import { MaritimeTransport } from "./maritimeTranspor";

export class Boat implements MaritimeTransport {
    deliver(address: string): void {
        console.log(`Delivering ${address} by boat`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the boat`);
    }
}