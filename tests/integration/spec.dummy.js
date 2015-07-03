/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
/* global describe, it, expect, browser */

// #####################################################################################################################
// #INTEGRATION TEST#
describe('Django CMS website', function () {
    it('should have a title', function () {
        browser.get('http://www.django-cms.org');

        expect(browser.getTitle()).toContain('django-cms');
    });
});
