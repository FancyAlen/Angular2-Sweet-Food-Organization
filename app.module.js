"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var food_detail_component_1 = require('./food-detail.component');
var foods_component_1 = require('./foods.component');
var food_service_1 = require('./food.service');
var user_service_1 = require('./user.service');
var app_routing_1 = require('./app.routing');
var dashboard_component_1 = require('./dashboard.component');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var food_search_component_1 = require('./food-search.component');
var food_form_component_1 = require('./food-form.component');
var highlight_directive_1 = require('./highlight.directive');
var title_component_1 = require('./title.component');
//import { FaderComponent }       from './fader.component'
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                food_detail_component_1.FoodDetailComponent,
                foods_component_1.FoodsComponent,
                food_search_component_1.FoodSearchComponent,
                food_form_component_1.FoodFormComponent,
                highlight_directive_1.HighlightDirective,
                title_component_1.TitleComponent,
            ],
            providers: [
                food_service_1.FoodService,
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map