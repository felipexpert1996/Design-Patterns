import { HamburguerBuilder } from './hamburguerBuilder';
import { PizzaBuilder } from './pizzaBuilder';

export class Director {
    
    public buildClassicHamburguer(builder: HamburguerBuilder): void {
        builder
            .setBase('Pão de Brioche')
            .setStuffing('Carne Premium')
            .setStuffing('Cheddar')
            .pack();
    }

    public buildMargherita(builder: PizzaBuilder): void {
        builder
            .setBase('Massa Fina Italiana')
            .setStuffing('Molho Tomate')
            .setStuffing('Mussarela e Manjericão')
            .pack();
    }
}