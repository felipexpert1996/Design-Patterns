import { Frete } from "./frete";

export class Pac implements Frete {
  calcular(valor: number): number {
    return valor * 1.2;
  }
}