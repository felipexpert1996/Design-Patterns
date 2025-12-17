import { Colleague } from "./Colleague";

export default class OrderDetail extends Colleague {
    currentOrderId: number | null = null

    displayDetails(orderId: number){
        console.log(`🔍 Displaying order details: ${orderId}`);
    }

    clearDetails(){
        this.currentOrderId = null;
        console.log('🧹 Clean order details.');
    }
}