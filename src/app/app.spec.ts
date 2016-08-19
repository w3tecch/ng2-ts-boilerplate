/// <reference path="./../../typings-custom/jasmine.d.ts" />

import {addProviders, inject} from '@angular/core/testing';
import {TRANSLATE_PROVIDERS} from 'ng2-translate';
import {HTTP_PROVIDERS} from '@angular/http';

// Load the implementations that should be tested
import { AppComponent } from './app.ts';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS,
    AppComponent
  ]));

  it('should say hello', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.sayHello()).toEqual('hello');
  }));
});
