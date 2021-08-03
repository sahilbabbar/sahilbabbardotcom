import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {BlogRoutingModule} from './blog-routing.module';
import {PostComponent} from './components/post/post.component';
import {SharedModule} from '../shared/shared.module';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import { ScssQSComponent } from './components/scss-qs/scss-qs.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ],
    exports: [
        PostPreviewComponent
    ],
    declarations: [HomeComponent, PostComponent, PostPreviewComponent, ScssQSComponent]
})
export class BlogModule {
}
