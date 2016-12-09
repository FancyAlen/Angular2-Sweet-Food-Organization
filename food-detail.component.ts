import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Food } from './food';
import { FoodService } from './food.service';

@Component({
  moduleId:module.id,
	selector: 'my-food-detail',
  templateUrl: 'food-detail.component.html',
  styleUrls: ['food-detail.component.css']
})

export class FoodDetailComponent implements OnInit {
  food: Food;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.foodService.getFood(id)
        .then(food => this.food = food);
    });
  }

  goBack(): void {
    window.history.back();
  }

  save():void {
    this.foodService.update(this.food)
      .then(() => this.goBack());
  }
}