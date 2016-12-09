import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Food } from './food';
import { FoodService } from './food.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css'],
	animations: [
		trigger('foodState', [
			state('inactive', style({
				backgroundColor: '#eee',
				transform: 'scale(1)'
			})),
			state('active', style({
				backgroundColor: '#cfd8dc',
				transform: 'scale(1.1)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	]
})
export class DashboardComponent implements OnInit {

	foods: Food[] = [];

	constructor(
		private router: Router,
		private foodService: FoodService) {
	}

	ngOnInit(): void {
		this.foodService.getFoods()
			.then(foods => this.foods = foods.slice(1, 5));
	}

	gotoDetail(food: Food): void {
		let link = ['/detail', food	.id];
		this.router.navigate(link);
	}
}
