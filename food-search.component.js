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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var food_search_service_1 = require('./food-search.service');
var FoodSearchComponent = (function () {
    function FoodSearchComponent(foodSearchService, router) {
        this.foodSearchService = foodSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // 传送一个搜索对象
    FoodSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    FoodSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foods = this.searchTerms
            .debounceTime(300) // 等待300ms传送最终字符
            .distinctUntilChanged() // 只在条件变化时才发送请求
            .switchMap(function (term) { return term // 调用搜索服务，保留最近对象
            ? _this.foodSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // 简单捕获异常
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    FoodSearchComponent.prototype.gotoDetail = function (food) {
        var link = ['/detail', food.id];
        this.router.navigate(link);
    };
    FoodSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'food-search',
            templateUrl: 'food-search.component.html',
            styleUrls: ['food-search.component.css'],
            providers: [food_search_service_1.FoodSearchService]
        }), 
        __metadata('design:paramtypes', [food_search_service_1.FoodSearchService, router_1.Router])
    ], FoodSearchComponent);
    return FoodSearchComponent;
}());
exports.FoodSearchComponent = FoodSearchComponent;
//# sourceMappingURL=food-search.component.js.map