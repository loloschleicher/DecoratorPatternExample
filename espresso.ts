import { Coffee } from './coffee';

export class Espresso extends Coffee{
    public description = "Espresso";

    public cost(): number {
        return 1.99;
    }
}