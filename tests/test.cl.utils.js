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
            expect(Cl.Utils).toBeDefined();
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

        describe('.redirectTo()', function () {
            it('forwards to a new url', function () {
                expect(window.location.href).not.toMatch('#testRedirect');
                Cl.Utils.redirectTo('#testRedirect');
                expect(window.location.href).toMatch('#testRedirect');
            });
        });

        describe('.setStorage() and .getStorage()', function () {
            beforeEach(function () {
                localStorage.clear();
            });

            it('use the local storage of the browser', function () {
                if (typeof (Storage) !== void(0)) {
                    expect(Storage).toEqual(jasmine.any(Object));
                } else {
                    expect(Storage).toThrowError(ReferenceError);
                }
            });

            it('one can store a value', function () {
                expect(localStorage.getItem('test#1')).toBeNull();
                expect(Cl.Utils.setStorage).toThrow();

                var returnValue = Cl.Utils.setStorage('test#1', 'true');
                expect(returnValue).toBe('true');
                expect(localStorage.getItem('test#1')).toBe('true');
            });

            it('the other retrieve a value', function () {
                expect(localStorage.getItem('test#2')).toBeNull();
                expect(Cl.Utils.getStorage).toThrow();

                Cl.Utils.setStorage('test#2', 'true');
                var returnValue = Cl.Utils.getStorage('test#2');
                expect(returnValue).toBe('true');
                expect(localStorage.getItem('test#2')).toBe('true');
            });
        });
    });

})();
