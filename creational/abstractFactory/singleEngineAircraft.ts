import { AirTransport } from "./airTransport";

export class singleEngineAircraft implements AirTransport {
    deliver(address: string): void {
        console.log(`Delivering ${address} by single engine aircraft`);
    }
    load(quantity: number): void {
        console.log(`Loading ${quantity} items into the single engine aircraft`);
    }
}