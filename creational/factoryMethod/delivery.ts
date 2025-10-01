export interface Delivery {
    deliver(address: string): void;
    load(quantity: number): void;
}