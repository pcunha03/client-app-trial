import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {BlogListComponent} from './blog/blog-list/blog-list.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogComponent, children: [
    { path: '', component: BlogListComponent, pathMatch: 'full' },
    { path: ':id', component: BlogDetailComponent }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
