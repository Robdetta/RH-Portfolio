import { Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog/blog-detail.component';

export const routes: Routes = [
  {
    path: 'blog/:slug',
    component: BlogDetailComponent
  }
];
