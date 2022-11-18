import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EzCard } from '@ezence/components/lib/functional-patterns/card/models/card.model';

@Component({
    selector: 'sb-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
    blogPosts!: EzCard[];

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
