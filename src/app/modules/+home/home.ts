import { Component, AfterViewInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
  selector: 'home',
  template: require('./home.html')
})

export class Home implements AfterViewInit {

  constructor() { ; }

  public ngAfterViewInit(): void {
    $('#sideNavTest')
      .sideNav({
          menuWidth: 300, // Default is 240
          edge: 'right', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
      );
  }

  public openModal(): void {
    console.log($('#sideNavTest'));
    $('#sideNavTest').sideNav('show');
  }

  public toast(): void {
    Materialize.toast('I am a toast', 4000);
  }

}
