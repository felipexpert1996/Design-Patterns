export interface LandTransport {
    deliver(address: string): void;
    load(quantity: number): void;
}