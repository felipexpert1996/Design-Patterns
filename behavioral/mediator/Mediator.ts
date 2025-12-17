import { Colleague } from "./Colleague";

export default interface Mediator {
    notify(sender: Colleague, event: string, data?: any): void;
}