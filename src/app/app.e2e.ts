'use strict';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 TS Boilerplate';
    expect(subject).toEqual(result);
  });

});
