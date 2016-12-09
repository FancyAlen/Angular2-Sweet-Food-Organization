import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let foods = [
    { id: 11, name: 'Apple',overdate:2017,kinks:'Fruit' },
    { id: 12, name: 'Pineapple',overdate: 2017,kinks:'Fruit' },
    { id: 13, name: 'Watermelon',overdate: 2017,kinks:'Fruit' },
    { id: 14, name: 'Banana',overdate: 2017,kinks:'Fruit' },
    { id: 15, name: 'Orange',overdate: 2017,kinks:'Fruit' },
    { id: 16, name: 'Lemon',overdate: 2017,kinks:'Fruit' },
    { id: 17, name: 'Cherry',overdate: 2017,kinks:'Fruit' },
    { id: 18, name: 'Strawberry',overdate: 2017,kinks:'Fruit' },
    { id: 19, name: 'pomegranate',overdate: 2017,kinks:'Fruit' },
    { id: 20, name: 'Litchi',overdate: 2017,kinks:'Fruit' }
    ];
    return { foods };
  }
}
