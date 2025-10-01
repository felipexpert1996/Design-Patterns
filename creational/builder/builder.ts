export interface Builder<T> {
    setBase(base: string): void;
    setStuffing(stuffing: string): void;
    setCompletion(completion: string): void;
    pack(): Builder<T>;
    getResult(): T;
}