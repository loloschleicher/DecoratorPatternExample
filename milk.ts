import { CoffeeDecorator } from './coffeeDecorator';
import { Coffee } from './coffee';

export class Milk extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }

    public cost(): number {
        return this.decoratedCoffee.cost() + 0.20;
    }
}