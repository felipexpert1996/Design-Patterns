import { Item } from './item';
import { ItemFlyWeight } from './itemFlyWeight';

export class OrderItem {
  constructor(private fly: ItemFlyWeight, private ctx: Item) {}

  render(): string {
    return `${this.fly.getName()} (${this.fly.getCode()}) at ${this.ctx.getTable()} ${this.ctx.getHour()} x${this.ctx.getQuantity()} -> total $${this.fly.getPrice() * this.ctx.getQuantity()}`;
  }

  total(): number {
    return this.fly.getPrice() * this.ctx.getQuantity();
  }
}
