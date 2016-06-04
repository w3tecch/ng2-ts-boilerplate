// TODO: https://github.com/auth0/angular2-authentication-sample/tree/master/src

import { Component, OnInit } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { Home } from './modules/+home/home.ts';
import { Todo } from './modules/+todo/todo.ts';

import AppConfig from './app.config.ts';

@Component({
  selector: 'app',
  providers: [ TranslateService ],
  template: require('./app.html'),
  styles: [require('./app.scss').toString()],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ TranslatePipe ]
})

@Routes([
  new Route({ path: '', component: Home }),
  new Route({ path: '/home', component: Home }),
  new Route({ path: '/todos', component: Todo }),
  new Route({ path: '*', component: Home })
])

export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  public ngOnInit(): void {

    // Set Language
    this.translate.setDefaultLang('en');
    this.translate.setTranslation('en', require('./../assets/i18n/en.json'));

    // Print configuration to console
    console.log('App config: ', AppConfig);
  }

  public sayHello(): string {
    return 'hello';
  }

}
