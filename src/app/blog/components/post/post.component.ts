import {
    Component,
    HostListener,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'sb-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
    postId!: string;

    @HostListener('window.reload') function() {
        this.router.navigate(['/blog', this.postId]);
    }

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.url.subscribe((url) => {
            this.postId = url[0].path;
        });
    }
}
