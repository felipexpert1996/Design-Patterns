import Iterator from "./Iterator"

export default interface Aggregator<T>{
    createIterator(): Iterator<T>
}