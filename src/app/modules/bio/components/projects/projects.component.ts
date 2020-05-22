import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../shared/utilities/NavItem';
import projectsJson from '../../../../../assets/data/projects/projects.json';

@Component({
    selector: 'sb-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projectsNavItems: NavItem[];
    projects = projectsJson.projects;

    constructor() {}

    ngOnInit() {
        this.projectsNavItems = [
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
                isHighlighted: true
            },
            {
                name: 'Blog',
                url: 'blog/MigratingEnterpriseAngularAppToAnotherDesignSystem'
            },
        ];
    }
}

