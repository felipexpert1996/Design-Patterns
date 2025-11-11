import { Item } from './item';
import { ItemFlyWeightFactory } from './itemFlyWeightFactory';
import { OrderItem } from './OrderItem';

const factory = new ItemFlyWeightFactory();

const fly1 = factory.getItem('Coke', 5, 'COKE-001');
const fly2 = factory.getItem('Coke', 5, 'COKE-001');

console.log('fly1 === fly2 ? ', fly1 === fly2); 
console.log(`Name: ${fly1.getName()}, Price: ${fly1.getPrice()}, Code: ${fly1.getCode()}`);

const fly3 = factory.getItem('Coke', 5, 'COKE-002');
console.log('fly1 === fly3 ? ', fly1 === fly3); 

const itemA = new Item('Table 1', 12, 30, 2); 
const itemB = new Item('Table 2', 12, 35, 1); 

console.log('\nComposed outputs (flyweight + extrinsic state) using OrderItem:');
const orderA = new OrderItem(fly1, itemA);
const orderB = new OrderItem(fly3, itemB);
console.log(orderA.render());
console.log(orderB.render());

const flyCodeA = factory.getItem('Water', 2, 'WATER-001');
const flyCodeB = factory.getItem('Water', 2, 'WATER-001');
const flyCodeC = factory.getItem('Water', 2, 'WATER-002');
console.log('\nSame code -> shared instance:');
console.log('flyCodeA === flyCodeB ? ', flyCodeA === flyCodeB);
console.log('Different code -> different instance: ', flyCodeA === flyCodeC);
console.log(`${flyCodeA.getName()} price ${flyCodeA.getPrice()} code:'${flyCodeA.getCode()}'`);

const itemC = new Item('Table 3', 13, 0, 3);
const orderC = new OrderItem(flyCodeA, itemC);
console.log('\nOrderItem for water:');
console.log(orderC.render());