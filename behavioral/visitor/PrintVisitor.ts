import { Visitor } from "./Visitor";
import NumberExpression from "./NumberExpression";
import AddExpression from "./AddExpression";
import SubtractExpression from "./SubtractExpression";

export default class PrintVisitor implements Visitor {
    private output: string = '';

    visitNumber(number: NumberExpression): void {
        this.output += number.Value.toString();
    }

    visitAdd(add: AddExpression): void {
        this.output += "( ";
        add.ExpressionLeft.accept(this);
        this.output += " + ";
        add.ExpressionRight.accept(this);
        this.output += " )";
    }

    visitSubtract(subtract: SubtractExpression): void {
        this.output += "( ";
        subtract.ExpressionLeft.accept(this);
        this.output += " - ";
        subtract.ExpressionRight.accept(this);
        this.output += " )";
    }
    
    public get Output(): string{
        return this.output;
    }
}