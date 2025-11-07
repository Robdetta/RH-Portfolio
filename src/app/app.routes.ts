import { Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogAllComponent } from './components/blog-all/blog-all.component';

export const routes: Routes = [
  {
    path: 'blog/:slug',
    component: BlogDetailComponent,
  },
  {
    path: 'blog',
    component: BlogAllComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
