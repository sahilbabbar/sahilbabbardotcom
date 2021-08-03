import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../shared/utilities/NavItem';

@Component({
    selector: 'sb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    blogHomeNavItems: NavItem[];

    constructor() {}

    ngOnInit() {
        this.blogHomeNavItems = [
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
                url: 'projects'
            },
            {
                name: 'Blog',
                url: 'blog',
                isHighlighted: true
            }
        ];
    }
}
