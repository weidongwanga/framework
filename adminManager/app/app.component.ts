﻿import { Component } from '@angular/core';

import { ProductService } from './src/_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private productService: ProductService) {
        // add some initial products
        if (productService.getAll().length === 0) {
            productService.save({ name: 'Boardies', price: '25.00' });
            productService.save({ name: 'Singlet', price: '9.50' });
            productService.save({ name: 'Thongs (Flip Flops)', price: '12.95' });
        }
        for (let i = 0; i < 100; i++) {
            productService.save({ name: 'Boardies' + i, price: '25.00' });
        }
    }
}