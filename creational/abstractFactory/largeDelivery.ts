import { TransportFactory } from "./transportFactory";
import { Truck } from "./truck";
import { Plane } from "./plane";
import { Boat } from "./boat";

export class LargeDelivery implements TransportFactory {
    createLandTransport() {
        return new Truck();
    }
    createAirTransport() {
        return new Plane();
    }
    createMaritimeTransport() {
        return new Boat();
    }
}