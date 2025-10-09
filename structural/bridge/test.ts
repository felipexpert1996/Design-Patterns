import { Pizza } from './Pizza';
import { Hamburguer } from './Hamburguer';
import { Hotdog } from './Hotdog';
import { ChickenFilling } from './ChickenFilling';
import { MeatFilling } from './MeatFilling';
import { VegetarianFilling } from './VegetarianFilling';

const chicken = new ChickenFilling();
const meat = new MeatFilling();
const veg = new VegetarianFilling();

const pizzaWithChicken = new Pizza(chicken);
pizzaWithChicken.prepareFood('roasted', 'oregano');

const burgerWithMeat = new Hamburguer(meat);
burgerWithMeat.prepareFood('smoked', 'pepper');

const hotdogWithVeg = new Hotdog(veg);
hotdogWithVeg.prepareFood('grilled', 'mustard');
