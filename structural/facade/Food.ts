import { Delivery } from "./Delivery";
import { Restaurant } from "./Restaurant";

export class FoodFacade {
    buyAndDeliverFood(): string {
        const restaurant = new Restaurant();
        const delivery = new Delivery();

        const food = restaurant.buyFood();
        const deliveryStatus = delivery.deliverFood();

        return `${food} ${deliveryStatus}`;
    }
}