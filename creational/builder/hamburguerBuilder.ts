import { Builder } from "./builder";
import { Hamburguer } from "./hamburguer";

export class HamburguerBuilder implements Builder<Hamburguer> {

    private hamburguer: Partial<Hamburguer> = {};

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.hamburguer = { bread: 'Pão Comum', meat: 'Bovina', cheese: 'Sem Queijo', isPack: false };
    }

    setBase(base: string): this {
        this.hamburguer.bread = base;
        return this;
    }

    setStuffing(stuffing: string): this {
        this.hamburguer.meat = stuffing;
        return this;
    }

    setCompletion(completion: string): this {
        this.hamburguer.cheese = completion;
        return this;
    }
    pack(): this {
        this.hamburguer.isPack = true;
        return this;
    }
    getResult(): Hamburguer {
        const hamburguer = this.hamburguer;
        this.reset();
        return hamburguer as Hamburguer;
    }
    
}