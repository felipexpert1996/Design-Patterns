import { Hamburguer } from './Hamburguer';
import { SnackDecorator } from './SnackDecorator';
import { XBurguer } from './XBurguer';

const base = new Hamburguer();
console.log('Base hamburger:');
console.log(base.addMeat());
console.log(base.addLettuce());
console.log(base.addTomato());

console.log('\nUsing a SnackDecorator (adds extras):');
const decorated = new SnackDecorator(base);
console.log(decorated.addMeat());
console.log(decorated.addLettuce());
console.log(decorated.addTomato());

console.log('\nComposing decorators: Hamburguer -> SnackDecorator -> XBurguer');
const chain = new XBurguer(decorated);
// XBurguer.addCheese() uses the inner snack's addMeat() and appends cheese
console.log(chain.addMeat());     // from HamburguerDecorator (via inheritance)
console.log(chain.addCheese());   // XBurguer specific method
console.log(chain.addLettuce());  // delegated through the decorator chain
console.log(chain.addTomato());   // delegated through the decorator chain

console.log('\nCustomer sees everyone as a Snack:');
const snacks = [base, decorated, chain];
for (const s of snacks) {
  console.log('- ' + s.addMeat());
}
