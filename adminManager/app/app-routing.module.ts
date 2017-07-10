import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './src/home/index';
import { ProductListComponent, ProductAddEditComponent } from './src/products/index';
import { SigninComponent } from './src/signin/index';
import {FMHeaderComponent} from "./src/blocks/header.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent,
        children: [
            { path: 'add', component: ProductAddEditComponent },
            { path: 'edit/:id', component: ProductAddEditComponent }
        ]
    },{
        path: 'signin',
        component: SigninComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ProductListComponent, ProductAddEditComponent, SigninComponent, FMHeaderComponent];