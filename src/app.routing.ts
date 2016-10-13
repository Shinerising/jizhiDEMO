import { Routes, RouterModule }  from '@angular/router';

import { IndexComponent }        from './index.component';
import { BlogComponent }         from './blog.component';

const appRoutes: Routes = [
{
  path: '',
  redirectTo: '/index',
  pathMatch: 'full'
},
{
  path: 'index',
  component: IndexComponent
},
{
  path: 'blog',
  component: BlogComponent,
},
{
  path: '**',
  redirectTo: '/index',
  pathMatch: 'full'
}
];
export const routing = RouterModule.forRoot(appRoutes);
