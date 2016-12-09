import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } 	 from '@angular/http';
import { AppComponent }  from './app.component';
import { FoodDetailComponent }  from './food-detail.component';
import { FoodsComponent }       from './foods.component';
import { FoodService }          from './food.service';
import { UserService }          from './user.service';
import { routing } 			    from './app.routing';
import { DashboardComponent }   from './dashboard.component';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { FoodSearchComponent }  from './food-search.component';
import { FoodFormComponent }    from './food-form.component';
import { HighlightDirective }   from './highlight.directive';
import { TitleComponent }       from './title.component';
//import { FaderComponent }       from './fader.component'
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		routing
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		FoodDetailComponent,
		FoodsComponent,
		FoodSearchComponent,
		FoodFormComponent,
		HighlightDirective,
		TitleComponent,
		//FaderComponent
	],
	providers:[
		FoodService,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
