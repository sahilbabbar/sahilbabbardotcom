import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BioRoutingModule} from './bio-routing.module';
import {HomeComponent} from './components/home/home.component';
import {BlogModule} from '../blog/blog.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        BioRoutingModule,
        BlogModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class BioModule { }
