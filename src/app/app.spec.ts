/// <reference path="./../../typings-custom/jasmine.d.ts" />

import { inject, TestBed } from '@angular/core/testing';
import { TranslateModule } from 'ng2-translate/ng2-translate';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot()],
    providers: [
      AppComponent
  ]}));

  it('should say hello', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.sayHello()).toEqual('hello');
  }));
});
