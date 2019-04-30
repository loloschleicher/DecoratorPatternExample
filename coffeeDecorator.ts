import { Coffee } from './coffee';

export abstract class CoffeeDecorator extends Coffee{
    decoratedCoffee: Coffee;
    public abstract getDescription(): string;
}