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
//import { Router }     from '@angular/router'
//export class User {
//	constructor(
//		public email:string,
//		public password:string) {}
//}
//var users = [
//	new User('2422707742@qq.com', '000000')];
var UserService = (function () {
    function UserService() {
        //	constructor(private router:Router){}
        //	logout(){
        //		localStorage.removeItem("user");
        //		this.router.navigate(['Login']);
        //	}
        //	login(user:User){
        //var authorUser = users.find(u => u.email === user.email);
        //if (authorUser && authorUser.password === user.password){
        //localStorage.setItem("user", authorUser);
        //this.router.navigate(['dashboard']);
        //return true;
        //}
        //return false;
        //	}
        //	checkCredentials(){
        //		if(localStorage.getItem("user")===null){
        //			this.router.navigate(['Login'])
        //		}
        //	}
        this.userName = 'FancyAlen';
    }
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map