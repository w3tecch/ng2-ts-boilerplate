import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'demo',
  templateUrl: 'app/components/demo/demo.html',
  styles: [require('./demo.scss').toString()],
  providers: [],
  directives: [],
  pipes: []
})

export class Demo {

  constructor(http: Http) {
    ;
  }
}
