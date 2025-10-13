import { Payment } from './Payment';
import { PagseguroAdapter } from './PagseguroAdapter';
import { PaypalAdapter } from './PaypalAdapter';
import { PixAdapter } from './PixAdapter';

const payments: Payment[] = [
  new PagseguroAdapter('seller@pagseguro.com', 'BRL'),
  new PaypalAdapter('seller@paypal.com', 'USD'),
  new PixAdapter('BRL')
];

payments.forEach((provider, i) => {
  const amount = 100 + i * 50;
  const destination = i === 2 ? 'pix-key-abc-123' : `account-${i}`;
  const result = provider.processPayment(amount, destination);
  console.log(result);
});
