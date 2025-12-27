import { Visitor } from "./Visitor";

export default interface Expression {
    interpreter(): number;
    accept(visitor: Visitor): void;
}