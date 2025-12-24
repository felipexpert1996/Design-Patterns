import Expression from "./Expression";

export default class NumberExpression implements Expression{

    private value: number;

    constructor(value: number){
        this.value = value;
    }

    interpreter(): number {
        return this.value;
    }

}