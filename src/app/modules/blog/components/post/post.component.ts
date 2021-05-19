import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavItem } from '../../../shared/utilities/NavItem';

@Component({
    selector: 'sb-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
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
                url: 'about'
            },
            {
                name: 'Projects',
                url: 'projects',
            },
            {
                name: 'Blog',
                url: 'blog',
                isHighlighted: true
            },
        ];
    }
}
