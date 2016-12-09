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
var food_service_1 = require('./food.service');
var FoodFormComponent = (function () {
    function FoodFormComponent(router, foodService) {
        this.router = router;
        this.foodService = foodService;
        this.kinds = ['Fruit', 'Cake', 'Drink'];
        this.submitted = false;
        this.active = true;
    }
    FoodFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    FoodFormComponent.prototype.newFood = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.foodService.create(name).then(function (food) {
            _this.foods.push(food);
            _this.active = false;
            setTimeout(function () { return _this.active = true; }, 0);
        });
    };
    FoodFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'food-form',
            templateUrl: 'food-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, food_service_1.FoodService])
    ], FoodFormComponent);
    return FoodFormComponent;
}());
exports.FoodFormComponent = FoodFormComponent;
//# sourceMappingURL=food-form.component.js.map