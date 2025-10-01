import { Director } from "./director";
import { HamburguerBuilder } from "./hamburguerBuilder";

const customHamburguer = new HamburguerBuilder();
const hamburguerVegano = customHamburguer
    .setBase('Pão Integral')
    .setStuffing('Hambúrguer de Grão de Bico')
    .pack();
const h1 = hamburguerVegano.getResult();
console.log(h1);

const director = new Director();
const builder = new HamburguerBuilder();
director.buildClassicHamburguer(builder);
const h2 = builder.getResult(); 
console.log(h2);
