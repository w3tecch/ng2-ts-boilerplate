import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.ts';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  FORM_PROVIDERS
])
  .catch(err => console.error(err));
