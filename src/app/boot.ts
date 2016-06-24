import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { TRANSLATE_PROVIDERS } from 'ng2-translate/ng2-translate';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.ts';
import { APP_ROUTER_PROVIDERS } from './app.routes.ts';
import AppConfig from './app.config.ts';

/**
 * Enable production mode
 */
if (AppConfig.ENV.PRODUCTION_MODE) {
  enableProdMode();
}

/**
 * Bootstrap application
 */
bootstrap(AppComponent, [
  // Enable new angular 2 forms
  disableDeprecatedForms(),
  provideForms(),

  // Provide HTTP
  ...HTTP_PROVIDERS,

  // Provide translation
  TRANSLATE_PROVIDERS,

  // Provide top level routes
  APP_ROUTER_PROVIDERS,

  // Switch to hash location strategie
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));
