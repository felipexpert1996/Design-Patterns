import { Frete } from "./frete";

export class Sedex implements Frete {
  calcular(valor: number): number {
    return valor * 1.5;
  }
}