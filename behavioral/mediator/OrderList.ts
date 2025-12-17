import { Colleague } from "./Colleague";

export default class OrderList extends Colleague {
    selectOrder(orderId: number){
        this.mediator.notify(this, 'OrderSelected', orderId)
    }

    refreshList(){
        console.log('🔄 Updated order list.');
    }
}