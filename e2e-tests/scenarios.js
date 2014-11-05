'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {

    browser.get('index.html');

    describe('tabs', function () {
        var tabs;

        it('should display a list of 3 tabs', function () {
            tabs = element.all(by.css('.tg-tabs > .tab'));
            
            expect(tabs.count()).toEqual(3);
        });

    });
});