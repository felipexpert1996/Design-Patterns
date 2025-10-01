import { Delivery } from "./delivery";
import { DeliveryFactory } from "./deliveryFactory";
import { Truck } from "./truck";


export class DeliveryTruckCreator implements DeliveryFactory  {
    createDelivery(): Delivery {
        return new Truck()
    }
}