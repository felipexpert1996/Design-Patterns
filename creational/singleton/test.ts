import { Car } from "./car";

const car1 = Car.getInstance("blue", "fusca");
const car2 = Car.getInstance("white", "lemon");
console.log(car1);
console.log(car2);
console.log(car1 === car2);