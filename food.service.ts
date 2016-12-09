import { Injectable } from '@angular/core';
import { Food } from './food';
//import { FOODS } from './mock-foods';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoodService{
	//服务器失败，错误处理器
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	//update	HTTP PUT方法修改持久化到模拟服务器
	private headers = new Headers({ 'Content-Type': 'application/json' });

	update(food: Food): Promise<Food> {
		const url = `${this.foodsUrl}/${food.id}`;
		return this.http
			.put(url, JSON.stringify(food), { headers: this.headers })
			.toPromise()
			.then(() => food)
			.catch(this.handleError);
	}
	//创建新的食物
	create(name: string): Promise<Food> {
		return this.http
			.post(this.foodsUrl, JSON.stringify({ name: name }), { headers: this.headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}//删除食物
	delete(id: number): Promise<void> {
		let url = `${this.foodsUrl}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	private foodsUrl = 'app/foods';//URL to web api
	constructor(private http: Http){ }

	getFoods():Promise<Food[]>{
		return this.http.get(this.foodsUrl)
					.toPromise()
					.then(response => response.json().data as Food[])
					.catch(this.handleError);
	}
	getFoodsSlowly(): Promise<Food[]> {
		return new Promise<Food[]>(resolve =>
			setTimeout(resolve, 2000)) //延迟2s
			.then(() => this.getFoods());
	}//延迟2s加载测试
	getFood(id: number): Promise<Food> {
		return this.getFoods()
			.then(foods => foods.find(food => food.id === id));
	}
}