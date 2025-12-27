import NumberExpression from "./NumberExpression";
import AddExpression from "./AddExpression";
import SubtractExpression from "./SubtractExpression";

export interface Visitor {
    visitNumber(number: NumberExpression): void;
    visitAdd(add: AddExpression): void;
    visitSubtract(subtract: SubtractExpression): void;
}