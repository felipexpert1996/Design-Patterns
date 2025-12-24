import AddExpression from "./AddExpression";
import NumberExpression from "./NumberExpression";
import SubtractExpression from "./SubtractExpression";

const five = new NumberExpression(5);
const ten = new NumberExpression(10);
const sum = new AddExpression(five, ten);
const two = new NumberExpression(2);
const result = new SubtractExpression(sum, two);
console.log(result.interpreter())