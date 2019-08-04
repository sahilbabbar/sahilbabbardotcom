import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {BlogRoutingModule} from './blog-routing.module';
import { PostComponent } from './components/post/post.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule
    ],
    declarations: [HomeComponent, PostComponent]
})
export class BlogModule { }
