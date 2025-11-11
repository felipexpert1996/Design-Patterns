import { ItemFlyWeight } from './itemFlyWeight';

export class ItemFlyWeightFactory {
    private cache: Map<string, ItemFlyWeight> = new Map();

    getItem(name: string, price: number, code: string): ItemFlyWeight {
        const key = code;
        if (!this.cache.has(key)) {
            this.cache.set(key, new ItemFlyWeight(name, price, code));
        }
        return this.cache.get(key)!;
    }
}