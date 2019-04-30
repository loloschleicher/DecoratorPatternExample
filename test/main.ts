
import { Espresso } from '../espresso';
import { Sugar } from '../sugar';
import { Milk } from '../milk';


        let coffeeEspresso = new Espresso();       
        coffeeEspresso = new Sugar(coffeeEspresso);
        coffeeEspresso = new Milk(coffeeEspresso);

        let coffeeEspresso1 = new Espresso();       
        
      
console.log(coffeeEspresso.getDescription());
console.log(coffeeEspresso1.getDescription());