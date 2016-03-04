import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'demo1',
  template: require('./demo1.html'),
  styles: [require('./demo1.scss').toString()],
  providers: [],
  directives: [],
  pipes: []
})

export class Demo1 {

  constructor(http: Http) {
    ;
  }
}
