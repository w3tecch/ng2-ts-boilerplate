import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'; //Router

import {Demo1} from './../demo1/demo1.ts';
import {Demo2} from './../demo2/demo2.ts';

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
