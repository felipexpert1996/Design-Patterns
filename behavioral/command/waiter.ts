import { OrderCommand } from "./orderCommand";

export class Waiter {
    OrderList: OrderCommand[] = [];

    addOrder(order: OrderCommand): void {
        this.OrderList.push(order);
    }

    sendOrders(): void {
        this.OrderList.forEach((order) => order.execute());
        this.OrderList = [];
    }
}