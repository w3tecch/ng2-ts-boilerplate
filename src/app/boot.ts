import 'angular2/bundles/angular2-polyfills';

import 'angular2/platform/browser';
import 'angular2/core';
import 'angular2/http';
import 'angular2/router';

import {bootstrap} from 'angular2/platform/browser';
import {FORM_PROVIDERS} from 'angular2/common';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app.ts';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  FORM_PROVIDERS
])
  .catch(err => console.error(err));
