import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sb-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
    postId!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.url.subscribe((url) => {
            this.postId = url[0].path;
        });
    }
}
