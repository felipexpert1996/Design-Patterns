import Expression from "./Expression";
import { Visitor } from "./Visitor";

export default class NumberExpression implements Expression{
    private value: number;

    constructor(value: number){
        this.value = value;
    }

    accept(visitor: Visitor): void {
        visitor.visitNumber(this);
    }

    interpreter(): number {
        return this.value;
    }

    public get Value(): number {
        return this.value;
    }

}