/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
/* global describe, it, expect */

// #############################################################################
// UNIT TEST
describe('base.js', function() {
    beforeEach(function () {
        fixture.setBase('tests/fixtures');
        this.markup = fixture.load('outdatedBrowser.html');
    });

    it('loads Cl.Utils._document()', function () {
        expect(window.Cl).toBeDefined();
        expect(Cl.Utils).toBeDefined();
    });

    it('loads outdatedBrowser', function () {
        expect(outdatedBrowser).toBeDefined();
    });
});
