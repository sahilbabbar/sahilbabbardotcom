import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { TopicsComponent } from './components/topics/topics.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [TopicsComponent, PostComponent]
})
export class BlogModule { }
