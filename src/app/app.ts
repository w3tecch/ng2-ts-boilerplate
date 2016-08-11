// TODO: https://github.com/auth0/angular2-authentication-sample/tree/master/src

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import AppConfig from './app.config.ts';

@Component({
  selector: 'app',
  providers: [ TranslateService ],
  template: require('./app.html'),
  styles: [require('./app.scss').toString()],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ TranslatePipe ]
})
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


    $('.button-collapse-side-nav')['sideNav']();
    // $('.button-collapse').sideNav();
    // $('.asdf').add

  }

  public sayHello(): string {
    return 'hello';
  }

}
