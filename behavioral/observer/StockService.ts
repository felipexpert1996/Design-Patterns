import { Observer } from "./Observer";

export class StockService implements Observer {

    notify(data: any): void {
        console.log('📦 Baixando itens do estoque...');
    }

}