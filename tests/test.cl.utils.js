/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

// #####################################################################################################################
// #TESTS#
(function () {
    'use strict';

    describe('Cl.Utils', function () {
        it('exists', function () {
            expect(Cl.Utils).toEqual(jasmine.any(Object));
        });

        describe('._document()', function () {
            it('removes noscript class from body', function () {
                var body = $(document.body);
                expect(body.hasClass('noscript')).toBe(false);
                body.addClass('noscript');
                Cl.Utils._document();
                expect(body.hasClass('noscript')).toBe(false);
            });

            it('runs consoleWrapper', function () {
                spyOn(Cl.Utils, '_consoleWrapper');
                Cl.Utils._document();
                expect(Cl.Utils._consoleWrapper).toHaveBeenCalled();
            });
        });
    });

})();
