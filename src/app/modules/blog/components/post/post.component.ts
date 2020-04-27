import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'sb-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

    constructor() {
        const disqus_config = function () {
            this.page.url = 'https://sahilbabbar.com/blog/MigratingEnterpriseAngularAppToAnotherDesignSystem';
            this.page.identifier = 'BlogPost-Migrating-To-Another-DS';
        };

        (function() {
            const d = document, s = d.createElement('script');
            s.src = 'https://sahilbabbar.disqus.com/embed.js';
            s.setAttribute('data-timestamp', String(+new Date()));
            (d.head || d.body).appendChild(s);
        })();
    }

    ngOnInit() {
    }

}
