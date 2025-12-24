import Expression from "./Expression";

export default class SubtractExpression implements Expression {

    private expressionLeft: Expression;
    private expressionRight: Expression;


    constructor(expressionLeft: Expression, expressionRight: Expression){
        this.expressionLeft = expressionLeft;
        this.expressionRight = expressionRight;
    }

    interpreter(): number {
        return this.expressionLeft.interpreter() - this.expressionRight.interpreter();
    }

}