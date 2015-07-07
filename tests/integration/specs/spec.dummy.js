/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
/* global describe, it, expect, browser */

// #############################################################################
// INTEGRATION TEST
describe('Django CMS website', function () {
    var dummyPage = require('../pages/page.dummy.js');

    it('should have a title', function () {
        browser.get(dummyPage.site);

        expect(browser.getTitle()).toContain('django-cms');
    });
});
