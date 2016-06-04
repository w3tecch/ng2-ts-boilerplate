import { bootstrap } from '@angular/platform-browser-dynamic';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { TRANSLATE_PROVIDERS } from 'ng2-translate/ng2-translate';
import { bind, enableProdMode } from '@angular/core';

import { AppComponent } from './app.ts';
import AppConfig from './app.config.ts';

if (AppConfig.ENV.PRODUCTION_MODE) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
  FORM_PROVIDERS,
  TRANSLATE_PROVIDERS
])
  .catch(err => console.error(err));
