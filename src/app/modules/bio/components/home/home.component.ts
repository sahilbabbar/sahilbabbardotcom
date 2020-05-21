import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavItem} from '../../../shared/utilities/NavItem';

@Component({
    selector: 'sb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    homeNavItems: NavItem[];
    homePageNavCSS: string;

    constructor() {}

    ngOnInit() {
        this.homeNavItems = [
            {
                name: 'About',
                url: 'about',
                cssStyle: {'color': '#fff'}
            },
            {
                name: 'Projects',
                url: 'projects'
            }
        ];
        this.homePageNavCSS = 'accentTexts';
    }
}
