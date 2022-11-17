import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [BlogComponent, PostComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ]
})
export class BlogModule {}
