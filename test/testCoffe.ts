import { expect } from 'chai';
import { Espresso } from '../espresso';
import { Sugar } from '../sugar';
import { Milk } from '../milk';
import { HouseBlend } from '../houseBlend';



describe('Test Coffee', function(){
    it('Cost of Coffee Espresso with milk and sugar', function(){
        let coffee = new Espresso();       
        coffee = new Sugar(coffee);
        coffee = new Milk(coffee);
        expect(coffee.cost()).equals(2.39); 
    });
    it('Description of Coffee House Blend with milk and sugar', function(){
        let coffee = new HouseBlend();       
        coffee = new Sugar(coffee);
        coffee = new Milk(coffee);
        expect(coffee.getDescription()).equals("House blend, Sugar, Milk"); 
    });
});