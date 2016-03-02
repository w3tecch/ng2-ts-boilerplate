///<reference path="./../node_modules/angular2/typings/tsd.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {FORM_PROVIDERS} from 'angular2/common';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app/app';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  FORM_PROVIDERS
])
  .catch(err => console.error(err));
