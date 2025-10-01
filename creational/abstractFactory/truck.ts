import { LandTransport } from "./landTransport";    

export class Truck implements LandTransport {
    deliver(address: string): void {
        console.log(`Delivering ${address} by truck`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the truck`);
    }
}