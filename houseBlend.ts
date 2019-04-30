import { Coffee } from './coffee';

export class HouseBlend extends Coffee {
    public description = "House blend";

    public cost(): number {
        return .99
    }
}