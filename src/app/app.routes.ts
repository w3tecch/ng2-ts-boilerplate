import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './modules/+home/home.ts';
import { Todo } from './modules/+todo/todo.ts';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'todos', component: Todo },
  { path: '**', redirectTo: '', terminal: true }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
