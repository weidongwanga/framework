"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./src/home/index");
var index_2 = require("./src/products/index");
var index_3 = require("./src/signin/index");
var header_component_1 = require("./src/blocks/header.component");
var routes = [
    { path: 'home', component: index_1.HomeComponent },
    {
        path: 'products',
        component: index_2.ProductListComponent,
        children: [
            { path: 'add', component: index_2.ProductAddEditComponent },
            { path: 'edit/:id', component: index_2.ProductAddEditComponent }
        ]
    }, {
        path: 'signin',
        component: index_3.SigninComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routedComponents = [index_1.HomeComponent, index_2.ProductListComponent, index_2.ProductAddEditComponent, index_3.SigninComponent, header_component_1.FMHeaderComponent];
//# sourceMappingURL=app-routing.module.js.map