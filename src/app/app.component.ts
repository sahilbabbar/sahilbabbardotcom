import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EzNavigation } from '@ezence/components/lib/functional-patterns/navigation/models/navigation.model';
import { EzCard } from '@ezence/components/lib/functional-patterns/card/models/card.model';
import { EzDialog } from '@ezence/components/lib/functional-patterns/dialog/models/dialog.model';
import { EzFooterItem } from '@ezence/components/lib/functional-patterns/footer/models/footer-item.model';
import { EzNotification } from '@ezence/components/lib/functional-patterns/notification/components/models/notification.model';

@Component({
    selector: 'sb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    navData!: EzNavigation;

    navDataDemo!: EzNavigation;

    cardDemo!: EzCard;

    dialogData!: EzDialog;

    footerData!: EzFooterItem[];

    notificationData!: EzNotification;

    constructor() {}

    ngOnInit(): void {
        this.footerData = [
            {
                label: 'Brand',
            },
            {
                label: 'Link 1',
                url: 'https://twitter.com',
                position: 'right',
            },
            {
                label: 'Link 2',
                url: 'https://github.com',
                position: 'right',
            },
        ];

        this.navData = {
            brand: {
                label: 'Ezence',
            },
            links: [
                {
                    label: 'Home',
                },
                {
                    label: 'Functional Patterns',
                    href: 'functional-patterns',
                },
                {
                    label: 'Perceptual Patterns',
                    href: 'perceptual-patterns',
                },
            ],
        };

        this.navDataDemo = {
            brand: {
                label: 'Brand',
            },
            links: [
                {
                    label: 'Link 1',
                },
                {
                    label: 'Link 2',
                },
                {
                    label: 'Link 3',
                },
                {
                    label: 'Link 4',
                },
                {
                    label: 'Link 5',
                },
            ],
        };

        this.cardDemo = {
            heading: 'Card heading should not be more than two lines',
            body: 'This is a card body that has been put here for demo purpose.',
            tag: 'Card Tag',
        };

        this.dialogData = {
            heading: 'Default Dialog',
            content:
                'This is a default dialog i.e. with all the default settings.',
        };

        this.notificationData = {
            message: 'This is a default notification message.',
        };
    }
}
