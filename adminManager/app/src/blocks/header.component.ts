import {Component, NgModule} from '@angular/core';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'fm-header',
    templateUrl: './header.component.html'
})
export class FMHeaderComponent {
    ngOnInit(): void {
        // this.app_name = this.app_name;
    }
    app_name: string

    constructor() {
        this.app_name = "管理系统2";
    }
}
