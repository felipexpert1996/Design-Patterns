import { MaritimeTransport } from "./maritimeTranspor";

export class Ferry implements MaritimeTransport {
    deliver(address: string): void {
        console.log(`Delivering ${address} by ferry`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the ferry`);
    }
}