import Expression from "./Expression";
import { Visitor } from "./Visitor";

export default class SubtractExpression implements Expression {
    private expressionLeft: Expression;
    private expressionRight: Expression;


    constructor(expressionLeft: Expression, expressionRight: Expression) {
        this.expressionLeft = expressionLeft;
        this.expressionRight = expressionRight;
    }

    accept(visitor: Visitor): void {
        visitor.visitSubtract(this);
    }

    interpreter(): number {
        return this.expressionLeft.interpreter() - this.expressionRight.interpreter();
    }

    public get ExpressionLeft(): Expression {
        return this.expressionLeft;
    }

    public get ExpressionRight(): Expression {
        return this.expressionRight;
    }

}