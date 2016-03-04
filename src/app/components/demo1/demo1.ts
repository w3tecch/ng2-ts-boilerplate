import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Router} from 'angular2/router';

@Component({
  selector: 'demo1',
  template: require('./demo1.html'),
  styles: [require('./demo1.scss').toString()],
  providers: [],
  directives: [],
  pipes: []
})

export class Demo1 {

  constructor(http: Http, private _router: Router) {
    ;
  }

  /**
   * goToHome
   */
  public goToHome(): void {
    this._router.parent.navigate(['Home']);
  }
}
