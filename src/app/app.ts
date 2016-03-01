// TODO: https://github.com/auth0/angular2-authentication-sample/tree/master/src

import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Home} from './components/home/home';
import {About} from './components/about/about';
import Logger from './utils/logger.service';

import {AppConfig} from './app.config.ts';

@Component({
  selector: 'app',
  providers: [],
  templateUrl: 'app/app.html',
  styles: [require('./app.scss').toString()],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true }),
  new Route({ path: '/about', component: About, name: 'About' })
])

export class AppComponent {

  private _log: Logger = new Logger('SeedAppTest');

  constructor() {
    this._log.info('constructor')(AppConfig);
  }

  public sayHello(): string {
    return 'hello';
  }

}
