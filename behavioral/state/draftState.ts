import { Order } from "./order";
import { PaidState } from "./paidState";
import { State } from "./state";

export class DraftState implements State {
    cancel(order: Order): void {
        order.items = [];
        console.log("Order canceled from Draft state.");
    }

    pay(order: Order): void {
        order.setState(new PaidState());
        console.log("Order paid from Draft state. Transitioning to Paid state.");
    }

    dispatch(order: Order): void {
        console.error("Cannot dispatch an order in Draft state.");
    }

    addItem(item: string, order: Order): void {
        order.items.push(item);
        console.log(`Item "${item}" added to the order in Draft state.`);
    }
}