import { AirTransport } from "./airTransport";

export class Plane implements AirTransport {
    deliver(address: string): void {
        console.log(`Delivering ${address} by plane`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the plane`);
    }
}