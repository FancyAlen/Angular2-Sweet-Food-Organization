import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Food }           from './food';

@Injectable()

export class FoodSearchService {
	constructor(private http: Http) { }
	search(term: string): Observable<Food[]> {
		return this.http
			.get(`app/foods/?name=${term}`)
			.map((r: Response) => r.json().data as Food[]);
	}
}
