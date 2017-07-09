import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ProductService, PubSubService } from './src/_services/index';
import {FMHeaderComponent} from "./src/blocks/header.component";
import {FMAsideComponent} from "./src/blocks/aside.component";
import {FMNavComponent} from "./src/blocks/nav.component";
import {FMSettingsComponent} from "./src/blocks/settings.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        FMHeaderComponent,
        FMAsideComponent,
        FMNavComponent,
        FMSettingsComponent
    ],
    providers: [
        ProductService,
        PubSubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }