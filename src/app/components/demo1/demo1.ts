import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {Router, CanDeactivate, ComponentInstruction} from 'angular2/router';

import Logger from './../../utils/logger.service.ts';

@Component({
  selector: 'demo1',
  template: require('./demo1.html'),
  styles: [require('./demo1.scss').toString()],
  providers: [],
  directives: [],
  pipes: []
})

export class Demo1 implements CanDeactivate {

  private _log: Logger = new Logger('Demo1');

  public confirmText: string;

  constructor(http: Http, private _router: Router) {
    ;
  }

  /**
   * goToHome
   */
  public goToHome(): void {
    this._router.parent.navigate(['Home']);
  }

  /**
   * routerCanDeactivate
   */
  public routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    let log = this._log.debug('routerCanDeactivate');
    log(this.confirmText);
    return this.confirmText === 'bubu';
  }
}
