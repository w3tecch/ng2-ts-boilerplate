import {Component} from '@angular/core';
import {Http} from '@angular/http';

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
