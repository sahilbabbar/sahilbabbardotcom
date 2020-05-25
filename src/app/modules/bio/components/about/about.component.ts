import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../shared/utilities/NavItem';
import workJson from '../../../../../assets/data/about/work.json';
import learnJson from '../../../../../assets/data/about/learn.json';
import recogJson from '../../../../../assets/data/about/recognition.json';

@Component({
    selector: 'sb-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

    aboutNavItems: NavItem[];

    workData = workJson;
    learnData = learnJson;
    recogData = recogJson;

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
                name: 'Projects',
                url: 'projects',
            },
            {
                name: 'Blog',
                url: 'blog',
            },
        ];
    }
}
