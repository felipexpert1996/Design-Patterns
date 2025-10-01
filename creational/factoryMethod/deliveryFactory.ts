import { Delivery } from "./delivery";

export interface DeliveryFactory {
    createDelivery(): Delivery;
}