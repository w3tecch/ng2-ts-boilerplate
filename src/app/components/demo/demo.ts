import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Demo1} from './../demo1/demo1';
import {Demo2} from './../demo2/demo2';

@Component({
  selector: 'demo',
  template: require('./demo.html'),
  styles: [require('./demo.scss').toString()],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  new Route({ path: '/demo1', component: Demo1, name: 'Demo1', useAsDefault: true }),
  new Route({ path: '/demo2', component: Demo2, name: 'Demo2' })
])

export class Demo {

  constructor(http: Http) {
    ;
  }
}
