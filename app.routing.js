"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var foods_component_1 = require('./foods.component');
var food_detail_component_1 = require('./food-detail.component');
var food_form_component_1 = require('./food-form.component');
var appRoutes = [
    {
        //path: 'foods',
        //component: FoodsComponent
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: food_detail_component_1.FoodDetailComponent
    },
    {
        path: 'foods',
        component: foods_component_1.FoodsComponent
    },
    {
        path: 'food-form',
        component: food_form_component_1.FoodFormComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map