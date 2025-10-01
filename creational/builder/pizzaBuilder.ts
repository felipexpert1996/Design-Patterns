import { Builder } from "./builder";
import { Pizza } from "./pizza";


export class PizzaBuilder implements Builder<Pizza> {

    private pizza: Partial<Pizza> = {};

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = { dough: 'Massa fina', filling: 'Molho de tomate', sauce: 'Queijo', isPack: false };
    }

    setBase(base: string): this {
        this.pizza.dough = base;
        return this;
    }
    setStuffing(stuffing: string): this {
        this.pizza.filling = stuffing;
        return this;
    }
    setCompletion(completion: string): this {
        this.pizza.dough = completion;
        return this;
    }
    pack(): Builder<Pizza> {
        this.pizza.isPack = true;
        return this;
    }
    getResult(): Pizza {
        const pizza = this.pizza;
        this.reset();
        return pizza as Pizza;
    }

}