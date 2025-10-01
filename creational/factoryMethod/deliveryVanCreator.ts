import { Delivery } from "./delivery";
import { DeliveryFactory } from "./deliveryFactory";
import { Van } from "./van";

export class DeliveryVanCreator implements DeliveryFactory{
    createDelivery(): Delivery {
        return new Van()
    }
}