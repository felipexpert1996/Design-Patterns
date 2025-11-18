import { Barman } from './barman';
import { Chef } from './chef';
import { PrepareCocktailCommand } from './prepareCocktailCommand';
import { PreparePastaCommand } from './preparePastaCommand';
import { Waiter } from './waiter';

const barman = new Barman();
const chef = new Chef();

const cocktailCmd = new PrepareCocktailCommand(barman);
const pastaCmd = new PreparePastaCommand(chef);

console.log('Executing individual commands:');
cocktailCmd.execute();
pastaCmd.execute();

console.log('\nUsing the Waiter (Invoker) pattern:');
const waiter = new Waiter();

waiter.addOrder(cocktailCmd);
waiter.addOrder(pastaCmd);
waiter.addOrder(cocktailCmd);

console.log('Waiter is sending all orders:');
waiter.sendOrders();

console.log('\nAll Command pattern demonstrations completed!');