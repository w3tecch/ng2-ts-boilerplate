import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'demo2',
  template: require('./demo2.html'),
  styles: [require('./demo2.scss').toString()],
  providers: [],
  directives: [],
  pipes: []
})

export class Demo2 {

  constructor(http: Http) {
    ;
  }
}
