import { TransportFactory } from "./transportFactory";
import { Van } from "./van";
import { singleEngineAircraft } from "./singleEngineAircraft";
import { Ferry } from "./ferry";

export class SmallDelivery implements TransportFactory {
    createLandTransport() {
        return new Van();
    }
    createAirTransport() {
        return new singleEngineAircraft();
    }
    createMaritimeTransport() {
        return new Ferry();
    }
}