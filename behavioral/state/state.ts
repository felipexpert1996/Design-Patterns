import { Order } from "./order";

export interface State {
    cancel(order: Order): void;
    dispatch(order: Order): void;
    pay(order: Order): void;
    addItem(item: string, order: Order): void;
}