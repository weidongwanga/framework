"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import fade in animation
var index_1 = require("../_animations/index");
var SigninComponent = (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.app_name = "test1";
    };
    SigninComponent.prototype.construction = function (app_name) {
        this.app_name = "test";
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        templateUrl: 'signin.component.html',
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    })
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map