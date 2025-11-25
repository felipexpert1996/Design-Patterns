import { State } from "./state";

export class Order {
    state: State;
    public items: string[] = [];
    
    constructor(state: State) {
        this.state = state;
    }

    cancel(): void {
        this.state.cancel(this);
    }

    paid(): void {
        this.state.pay(this);
    }

    dispatch(): void {
        this.state.dispatch(this);
    }
    
    addItem(item: string): void {
        this.state.addItem(item, this);
    }

    setState(state: State) {
        this.state = state;
    }
}