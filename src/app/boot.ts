import {NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, disableDeprecatedForms, provideForms} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {routing} from './app.routes';

import {AppComponent}  from './app';
import AppConfig from './app.config.ts';
import {Todo} from './modules/+todo/todo';
import {Home} from './modules/+home/home';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    Home,
    Todo
  ],
  providers: [
    // Enable new angular 2 forms
    disableDeprecatedForms(),
    provideForms(),

    // Provide HTTP
    ...HTTP_PROVIDERS,

    // Provide translation
    TRANSLATE_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

/**
 * Enable production mode
 */
if (AppConfig.ENV.PRODUCTION_MODE) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
