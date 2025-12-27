export default interface Iterator<T>{
    next(): T;
    hasNext(): boolean;
}