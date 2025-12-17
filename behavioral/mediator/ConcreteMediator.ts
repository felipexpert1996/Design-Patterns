import CancelButton from "./CancelButton";
import { Colleague } from "./Colleague";
import Mediator from "./Mediator";
import OrderDetail from "./OrderDetail";
import OrderList from "./OrderList";

export default class ConcreteMediator implements Mediator {

    public orderList?: OrderList;
    public orderDetail?: OrderDetail;
    public cancelButton?: CancelButton;
    
    notify(sender: Colleague, event: string, data?: any): void {
        switch (event) {
            case 'OrderSelected':
                this.orderDetail?.displayDetails(data);
                break;
            case 'CancelClicked':
                this.orderDetail?.clearDetails();
                this.orderList?.refreshList();
                break;
            default:
                throw Error('Unknown event');
        }
    }

}