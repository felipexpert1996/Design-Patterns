import { Order } from "./order";
import { State } from "./state";

export class ShippedState implements State {
    cancel(order: Order): void {
        console.error("Cannot cancel an order in Shipped state.");
    }

    pay(order: Order): void {
        console.error("Cannot pay an order in Shipped state.");
    }

    dispatch(order: Order): void {
        console.error("Cannot dispatch an order in Shipped state.");
    }

    addItem(item: string, order: Order): void {
        console.error("Cannot add items to an order in Shipped state.");
    }
}