import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BioRoutingModule} from './bio-routing.module';
import {HomeComponent} from './components/home/home.component';
import {BlogModule} from '../blog/blog.module';
import {SharedModule} from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
    imports: [
        CommonModule,
        BioRoutingModule,
        BlogModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ProjectsComponent
    ]
})
export class BioModule { }
