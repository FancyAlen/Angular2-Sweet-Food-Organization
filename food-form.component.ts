import { Component } from '@angular/core';
import { Food }    from './food';
import { Router } from '@angular/router';
import { FoodService} from './food.service'
import { FoodsComponent } from './foods.component'
import { InMemoryDataService} from './in-memory-data.service'
@Component({
  moduleId: module.id,
  selector: 'food-form',
  templateUrl: 'food-form.component.html'
})
export class FoodFormComponent {
  kinds = ['Fruit', 'Cake', 'Drink'];
  food: Food;
  foods: Food[];
  submitted = false;
  constructor(
    private router: Router,
    private foodService: FoodService) { }
  onSubmit() { this.submitted = true; }

  active = true;

  newFood(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.foodService.create(name).then(food => {
      this.foods.push(food);
      this.active = false;
      setTimeout(() => this.active = true, 0);
    });
  }
}