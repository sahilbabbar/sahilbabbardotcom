import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'blog',
        loadChildren: '../../modules/blog/blog.module#BlogModule'
    },
    {
        path: 'blog/MigratingEnterpriseAngularAppToAnotherDesignSystem',
        loadChildren: '../../modules/blog/blog.module#BlogModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BioRoutingModule {}
