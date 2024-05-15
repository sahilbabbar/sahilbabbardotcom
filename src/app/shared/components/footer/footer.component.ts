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
                label: "Sahil Babbar's Web Space"
            },
            {
                label: '(v3.0.9) 2018 - 2024, MIT Licensed.',
                position: 'left',
                css: 'margin-top-small color-var-black-1-imp' // TODO: use BEM
            },
            {
                label: 'Handcrafted with Essence Design System',
                position: 'left',
                css: 'margin-top-small color-var-black-1-imp' // TODO: use BEM
            },
            {
                icon: 'twitter',
                url: 'https://twitter.com/sahilbabbarrr',
                position: 'right'
            },
            {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/sahilbabbarrr/',
                position: 'right'
            }
        ];
    }
}
