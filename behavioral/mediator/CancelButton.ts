import { Colleague } from "./Colleague";

export default class CancelButton extends Colleague {
    click(orderId: number){
        this.mediator.notify(this, 'CancelClicked', orderId)
    }
}