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

        describe('redirectTo()', function () {
            it('redirects you to a new url', function () {
                expect(window.location.href).not.toMatch('#testRedirect');
                Cl.Utils.redirectTo('#testRedirect');
                expect(window.location.href).toMatch('#testRedirect');
            });
        });

        describe('setStorage()', function () {
            it('checks if localstorage is available', function () {
                if (typeof (Storage) !== void(0)) {
                    expect(Storage).toEqual(jasmine.any(Object));
                } else {
                    expect(Storage).toThrowError(TypeError);
                }
            });
            it('passes a token and value to localstorage', function () {
                localStorage.clear();
                expect(localStorage.getItem('test#1')).toBeNull();
                Cl.Utils.setStorage('test#1', 'true');
                expect(localStorage.getItem('test#1')).toBe('true');
            });
        });

        describe('getStorage()', function () {
            it('checks if localstorage is available', function () {
                if (typeof (Storage) !== void(0)) {
                    expect(Storage).toEqual(jasmine.any(Object));
                } else {
                    expect(Storage).toThrowError(TypeError);
                }
            });
            it('retrieves the value of a token', function () {
                localStorage.clear();
                localStorage.setItem('test#2', 'true');
                expect(localStorage.getItem('test')).toBeNull();
                var storage = Cl.Utils.getStorage('test#2');
                expect(storage).toBe('true');
            });
        });
    });

})();
