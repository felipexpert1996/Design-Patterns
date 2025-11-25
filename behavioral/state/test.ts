import { DraftState } from "./draftState";
import { Order } from "./order";

const draftState = new DraftState();
const order = new Order(draftState);
order.addItem("Notebook");
order.dispatch(); // Should show an error
order.paid();
order.addItem("Mouse"); // Should show an error
order.dispatch();
order.cancel(); // Should show an error