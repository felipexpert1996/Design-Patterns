import { Order } from "./Order";
import { EmailService } from "./EmailService";
import { StockService } from "./StockService";

const order = new Order();
const emailService = new EmailService();
const stockService = new StockService();

order.subscribe(emailService);
order.subscribe(stockService);

order.payOrder("12345");

order.removeObserver(emailService);

order.payOrder("67890");