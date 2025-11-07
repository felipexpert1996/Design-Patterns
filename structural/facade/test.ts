import { FoodFacade } from './Food';
import { Restaurant } from './Restaurant';
import { Delivery } from './Delivery';

// Uso simples via Facade
const facade = new FoodFacade();
console.log('Using Facade:');
console.log(facade.buyAndDeliverFood());

// Uso direto dos subsistemas (sem Facade)
console.log('\nDirect subsystem usage (without Facade):');
const restaurant = new Restaurant();
const delivery = new Delivery();
console.log(restaurant.buyFood());
console.log(delivery.deliverFood());
