/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

// #####################################################################################################################
// #NAMESPACES#
// var Cl = window.Cl || {};
/* global describe, it, expect */

// #####################################################################################################################
// #TESTS#
(function () {
    'use strict';

    describe('base.js', function () {
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

        it('loads Cl.Debug', function () {
            expect(Cl.Debug).toBeDefined();
            new Cl.Debug();
            expect($('#divio-dt').length).toBeTruthy();
        });
    });

})();
