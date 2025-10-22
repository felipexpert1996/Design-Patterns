import { Bank } from './Bank';
import { CreditCardProxy } from './CreditCardProxy';

const bank = new Bank();
console.log(bank.makePayment(50)); 

const proxy = new CreditCardProxy(bank, 100);
console.log(proxy.makePayment(80));  
console.log(proxy.makePayment(150)); 

(proxy as any).creditLimit = 200;
console.log(proxy.makePayment(150));
