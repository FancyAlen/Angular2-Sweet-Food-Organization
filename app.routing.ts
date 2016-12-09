import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FoodsComponent }      from './foods.component';
import { FoodDetailComponent }	from './food-detail.component';
import { FoodFormComponent}    from './food-form.component'

const appRoutes: Routes = [
	{
		//path: 'foods',
		//component: FoodsComponent
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
		//path: 'dashboard',
		//component: DashboardComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: FoodDetailComponent
	},
	{
		path: 'foods',
		component: FoodsComponent
	},
	{
		path: 'food-form',
		component: FoodFormComponent
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

