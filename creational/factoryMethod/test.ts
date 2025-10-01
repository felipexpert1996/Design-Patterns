import { DeliveryVanCreator } from "./deliveryVanCreator";
import { DeliveryTruckCreator } from "./deliveryTruckCreator";

const vanCreator = new DeliveryVanCreator();
const van = vanCreator.createDelivery();

van.load(10);
van.deliver("123 Main St");

const truckCreator = new DeliveryTruckCreator();
const truck = truckCreator.createDelivery();

truck.load(50);
truck.deliver("456 Oak Ave");