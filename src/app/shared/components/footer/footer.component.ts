import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EzFooterItem } from '@ezence/components/lib/functional-patterns/footer/models/footer-item.model';

@Component({
    selector: 'sb-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
    footerData!: EzFooterItem[];

    constructor() {}

    ngOnInit(): void {
        this.footerData = [
            {
                label: "Sahil Babbar's Web Space v3.0.1"
            },
            {
                label: '2018 - 2022, MIT Licensed.',
                position: 'left',
                css: 'margin-top-small color-var-black-1-imp' // TODO: use BEM
            },
            {
                label: 'Handcrafted with Ezence',
                position: 'left',
                css: 'margin-top-small color-var-black-1-imp' // TODO: use BEM
            },
            {
                icon: 'twitter',
                url: 'https://twitter.com/sahilbabbarrr',
                position: 'right'
            },
            {
                icon: 'instagram',
                url: 'https://instagram.com/sahilbabbarrr',
                position: 'right'
            },
            {
                icon: 'github',
                url: 'https://github.com/sahilbabbar',
                position: 'right'
            },
            {
                icon: 'linkedin',
                url: 'https://linkedin.com/1sahilbabbar',
                position: 'right'
            }
        ];
    }
}
