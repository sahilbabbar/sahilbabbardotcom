import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../shared/utilities/NavItem';
import aboutData from '../../../../../assets/data/about.json';

@Component({
    selector: 'sb-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

    aboutNavItems: NavItem[];

    aboutData: any;

    constructor() {}

    ngOnInit(): void {
        this.aboutNavItems = [
            {
                name: 'Sahil Babbar',
                url: '/',
            },
            {
                name: 'About',
                isHighlighted: true,
            },
            {
                name: 'Blog',
                url: 'blog',
            },
        ];

        this.aboutData = aboutData.about;
    }
}
