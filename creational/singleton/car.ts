export class Car {

    private color: string;
    private name: string;
    static instance?: Car;

    constructor(color: string, name: string){
        this.color = color;
        this.name = name;
    }

    public static getInstance(color: string, name: string): Car {
        if(Car.instance === undefined){
            Car.instance = new Car(color, name);
        }
        return Car.instance;
    }
}