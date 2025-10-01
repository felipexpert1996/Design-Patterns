import { LandTransport } from "./landTransport";

export class Van implements LandTransport {
    deliver(address: string): void {
        console.log(`Delivering ${address} by van`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the van`);
    }
}