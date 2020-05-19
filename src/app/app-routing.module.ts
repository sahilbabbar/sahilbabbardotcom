import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/bio/bio.module#BioModule'
    },
    // {
    //     path: 'about',
    //     loadChildren: './modules/bio/bio.module#BioModule'
    // },
    {
        path: 'blog/MigratingEnterpriseAngularAppToAnotherDesignSystem',
        loadChildren: './modules/blog/blog.module#BlogModule'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
