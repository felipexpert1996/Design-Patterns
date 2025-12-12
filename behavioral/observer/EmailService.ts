import { Observer } from "./Observer";

export class EmailService implements Observer {
    notify(data: any): void {
        console.log('📧 Enviando email para o cliente do pedido...');
    }
}