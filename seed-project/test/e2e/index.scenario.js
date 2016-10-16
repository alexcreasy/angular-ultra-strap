'use strict';

describe('Demo todo app index page', function () {
  it('should have a title', function () {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Test Application');
  });
});
