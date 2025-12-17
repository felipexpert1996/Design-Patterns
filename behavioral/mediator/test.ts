import CancelButton from "./CancelButton";
import ConcreteMediator from "./ConcreteMediator";
import OrderDetail from "./OrderDetail";
import OrderList from "./OrderList";

const mediator = new ConcreteMediator();
const orderList = new OrderList(mediator);
const orderDetail = new OrderDetail(mediator);
const cancelButton = new CancelButton(mediator);

mediator.cancelButton = cancelButton;
mediator.orderDetail = orderDetail;
mediator.orderList = orderList;

orderList.selectOrder(123);
cancelButton.click(123);