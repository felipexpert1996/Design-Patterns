import { SmallDelivery } from "./smallDelivery";
import { LargeDelivery } from "./largeDelivery";

const factory1 = new SmallDelivery();
const landTransport1 = factory1.createLandTransport();
landTransport1.load(10);
landTransport1.deliver("123 Main St");

const airTransport1 = factory1.createAirTransport();
airTransport1.load(5);
airTransport1.deliver("456 Elm St");

const maritimeTransport1 = factory1.createMaritimeTransport();
maritimeTransport1.load(20);
maritimeTransport1.deliver("789 Oak St");



const factory2 = new LargeDelivery();
const landTransport2 = factory2.createLandTransport();
landTransport2.load(15);
landTransport2.deliver("321 Pine St");

const airTransport2 = factory2.createAirTransport();
airTransport2.load(10);
airTransport2.deliver("654 Maple St");

const maritimeTransport2 = factory2.createMaritimeTransport();
maritimeTransport2.load(25);
maritimeTransport2.deliver("987 Cedar St");