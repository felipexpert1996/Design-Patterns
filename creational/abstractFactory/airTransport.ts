export interface AirTransport {
    deliver(address: string): void;
    load(quantity: number): void;
}