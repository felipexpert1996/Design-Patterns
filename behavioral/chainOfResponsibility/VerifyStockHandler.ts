import AbstractHandler from "./AbstractHandler";

export default class VerifyStockHandle extends AbstractHandler {

    private itensInStock: Set<string> = new Set(["object1", "object2", "object3"]);

    handle(request: any): any {
        if(!this.itensInStock.has(request.item)){
            throw new Error('Item out of stock.');
        } else {
            return super.handle(request);
        }
    }

}