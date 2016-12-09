import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from './food';
import { FoodService } from './food.service';

 @Component({
  moduleId: module.id,
  selector: 'my-foods',
  templateUrl:'foods.component.html',
  styleUrls: ['foods.component.css']
})
 export class FoodsComponent implements OnInit {
  foods: Food[];
  selectedFood: Food;
  
  constructor(
    private router: Router,
    private foodService:FoodService){}
  
  getFoods(): void{
    //this.foodService.getFoodsSlowly().then(foods => this.foods = foods);//延迟测试
    this.foodService.getFoods().then(foods => this.foods = foods);
  }

  ngOnInit(): void {
    this.getFoods();
  }

  onSelect(food: Food): void {
    this.selectedFood = food;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedFood.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.foodService.create(name)
      .then(food => {
        this.foods.push(food);
        this.selectedFood = null;
      });
  }

  delete(food: Food): void {
    this.foodService
      .delete(food.id)
      .then(() => {
        this.foods = this.foods.filter(h => h !== food);
        if (this.selectedFood === food) { this.selectedFood = null; }
      });
  }
}
