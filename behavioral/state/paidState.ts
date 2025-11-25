import { Order } from "./order";
import { ShippedState } from "./shippedState";
import { State } from "./state";

export class PaidState implements State {
    cancel(order: Order): void {
        order.items = [];
        console.log("Order canceled from Paid state.");
    }

    pay(order: Order): void {
        console.error("Cannot pay an order in Paid state.");
    }

    dispatch(order: Order): void {
        order.setState(new ShippedState());
        console.log("Order dispatched from Paid state. Transitioning to Shipped state.");
    }

    addItem(item: string, order: Order): void {
        console.error("Cannot add items to an order in Paid state.");
    }
}