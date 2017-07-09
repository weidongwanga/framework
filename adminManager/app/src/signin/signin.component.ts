import { Component, OnInit} from '@angular/core';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: './signin.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class SigninComponent implements OnInit {
    ngOnInit(): void {
        this.app_name = "test1";
    }
    app_name:string;
    construction(app_name:string) {
        this.app_name = "test";
    }
}