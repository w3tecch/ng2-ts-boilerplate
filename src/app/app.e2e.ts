/// <reference path="./../../typings-custom/protractor.d.ts"/>
'use strict';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'ng2-ts-boilerplate';
    expect(subject).toEqual(result);
  });

});
