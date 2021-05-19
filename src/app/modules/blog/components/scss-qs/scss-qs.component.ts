import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavItem } from '../../../shared/utilities/NavItem';

@Component({
    selector: 'sb-scss-qs',
    templateUrl: './scss-qs.component.html',
    styleUrls: ['./scss-qs.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ScssQSComponent implements OnInit {
    postNavItems: NavItem[];

    constructor() {}

    ngOnInit() {
        this.postNavItems = [
            {
                name: 'Sahil Babbar',
                url: '/',
            },
            {
                name: 'About',
                url: 'about',
            },
            {
                name: 'Projects',
                url: 'projects',
            },
            {
                name: 'Blog',
                url: 'blog',
                isHighlighted: true,
            },
        ];
    }
}
