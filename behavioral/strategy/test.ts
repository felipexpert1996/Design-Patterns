import { Pedido } from './pedido';
import { Pac } from './pac';
import { Sedex } from './sedex';

const valorPedido = 100;

console.log('Strategy 1: Using PAC (1.2x multiplier)');
const pacStrategy = new Pac();
const pedido1 = new Pedido(pacStrategy);
console.log(`Shipping cost with PAC: $${pedido1.calcularFrete(valorPedido)}`);

console.log('\nStrategy 2: Using SEDEX (1.5x multiplier)');
const sedexStrategy = new Sedex();
const pedido2 = new Pedido(sedexStrategy);
console.log(`Shipping cost with SEDEX: $${pedido2.calcularFrete(valorPedido)}`);

console.log('\nStrategy 3: Changing strategy at runtime');
const pedido3 = new Pedido(pacStrategy);
console.log(`Initial cost with PAC: $${pedido3.calcularFrete(valorPedido)}`);

pedido3.setFreteStrategy(sedexStrategy);
console.log(`After switching to SEDEX: $${pedido3.calcularFrete(valorPedido)}`);

console.log('\nStrategy 4: Using strategies uniformly');
const strategies = [pacStrategy, sedexStrategy];
const nomes = ['PAC', 'SEDEX'];

strategies.forEach((strategy, index) => {
  const pedido = new Pedido(strategy);
  console.log(`${nomes[index]}: $${pedido.calcularFrete(valorPedido)}`);
});

console.log('\nAll Strategy pattern demonstrations completed!');
