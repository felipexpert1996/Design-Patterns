export interface MaritimeTransport {
    deliver(address: string): void;
    load(quantity: number): void;
}