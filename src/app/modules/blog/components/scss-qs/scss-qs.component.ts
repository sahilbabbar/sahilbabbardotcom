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

    constructor() {
        const disqus_config = function () {
            this.page.url =
                'https://sahilbabbar.com/blog/MigratingEnterpriseAngularAppToAnotherDesignSystem';
            this.page.identifier = 'SCSS-Quick-Start';
        };

        (function () {
            const d = document,
                s = d.createElement('script');
            s.src = 'https://sahilbabbar.disqus.com/embed.js';
            s.setAttribute('data-timestamp', String(+new Date()));
            (d.head || d.body).appendChild(s);
        })();
    }

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
