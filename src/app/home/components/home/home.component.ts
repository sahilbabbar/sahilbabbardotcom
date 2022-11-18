import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    OnInit
} from '@angular/core';
import { EzCard } from '@ezence/components/lib/functional-patterns/card/models/card.model';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    blogPosts!: EzCard[];

    @HostListener('window.reload') function() {
        this.router.navigate(['/home']);
    }

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.blogPosts = [
            {
                id: 3,
                image: 'assets/blog/three.png',
                heading: 'Reflecting on "Thoughts on Design"',
                // body: 'This is a card body that has been put here for demo purpose.',
                tag: '21 MAY 2021'
            },
            {
                id: 2,
                image: 'assets/blog/two.png',
                heading: 'SCSS Quick Start - Make CSS Fun',
                // body: 'This is a card body that has been put here for demo purpose.',
                tag: '13 AUG 2020'
            },
            {
                id: 1,
                image: 'assets/blog/one.png',
                heading:
                    'Migrating Enterprise Angular App To Another Design System',
                // body: 'This is a card body that has been put here for demo purpose.',
                tag: '22 APR 2020'
            }
        ];
    }
}
