import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import Logger from './utils/logger.service';

import {AppConfig} from './app-config.ts';

@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'app/seed-app.html',
  styles: [require('./seed-app.scss').toString()],
  //styleUrls: ['./seed-app.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true }),
  new Route({ path: '/about', component: About, name: 'About' }),
  new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser' })
])

export class SeedApp {

  private _log: Logger = new Logger('SeedAppTest');

  constructor() {
    this._log.info('constructor')(AppConfig);
  }

  public sayHello(): string {
    return 'hello';
  }

}
