import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BioRoutingModule} from './bio-routing.module';
import {HomeComponent} from './components/home/home.component';


@NgModule({
    imports: [
        CommonModule,
        BioRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class BioModule { }
