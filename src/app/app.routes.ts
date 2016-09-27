import { Routes, RouterModule } from '@angular/router';

import { Home } from './modules/+home/home.ts';
import { Todo } from './modules/+todo/todo.ts';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'todos', component: Todo },
  { path: '**', redirectTo: '' }
];

export const RouterConfig = RouterModule.forRoot(routes, { useHash: true });
