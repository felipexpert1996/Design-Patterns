import { Frete } from "./frete";

export class Pedido {
    private freteStrategy: Frete;

    constructor(freteStrategy: Frete) {
        this.freteStrategy = freteStrategy;
    }

    setFreteStrategy(freteStrategy: Frete) {
        this.freteStrategy = freteStrategy;
    }

    calcularFrete(valor: number): number {
        return this.freteStrategy.calcular(valor);
    }
}