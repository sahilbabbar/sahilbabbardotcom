import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EzNavigation } from '@ezence/components/lib/functional-patterns/navigation/models/navigation.model';

@Component({
    selector: 'sb-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
    navData!: EzNavigation;
    constructor() {}

    ngOnInit(): void {
        this.navData = {
            brand: {
                label: 'SB',
                href: '/'
            },
            links: [
                {
                    label: 'Blog',
                    href: 'blog'
                },
                {
                    label: 'About',
                    href: 'about'
                }
            ]
        };
    }
}
