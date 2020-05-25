import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PostComponent} from './components/post/post.component';

const routes: Routes = [
    {
        path: 'MigratingEnterpriseAngularAppToAnotherDesignSystem',
        component: PostComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
