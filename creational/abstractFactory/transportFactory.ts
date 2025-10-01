import { LandTransport } from "./landTransport";
import { AirTransport } from "./airTransport";
import { MaritimeTransport } from "./maritimeTranspor";


export interface TransportFactory {
    createLandTransport(): LandTransport;
    createAirTransport(): AirTransport;
    createMaritimeTransport(): MaritimeTransport;
}