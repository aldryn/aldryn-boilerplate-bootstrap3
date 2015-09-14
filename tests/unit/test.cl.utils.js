/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

'use strict';
/* global Cl, jasmine, describe, it, expect, Storage, spyOn, beforeEach */

// #############################################################################
// UNIT TEST
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
            expect(window.console).toEqual(jasmine.any(Object));
        });
    });

    describe('.redirectTo()', function () {
        it('forwards to a new url', function () {
            window.location.href.replace('#testRedirect', '');
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
                expect(Storage).toBeDefined();
            } else {
                expect(Storage).toThrowError(ReferenceError);
            }

            expect(Cl.Utils._isStorageSupported).toBe(true);
        });

        it('one can store a value', function () {
            expect(localStorage.getItem('test#1')).toBeNull();

            var returnValue = Cl.Utils.setStorage('test#1', 'true');
            expect(returnValue).toBe('true');
            expect(localStorage.getItem('test#1')).toBe('true');
        });

        it('the other retrieve a value', function () {
            expect(localStorage.getItem('test#2')).toBeNull();

            Cl.Utils.setStorage('test#2', 'true');
            var returnValue = Cl.Utils.getStorage('test#2');
            expect(returnValue).toBe('true');
            expect(localStorage.getItem('test#2')).toBe('true');
        });

        it('handle exceptions as expected', function () {
            Cl.Utils._isStorageSupported = false;

            expect(Cl.Utils.getStorage('test#3')).toBe(false);
            expect(Cl.Utils.getStorage()).toBe(false);

            expect(Cl.Utils.setStorage('test#3', 'true')).toBe(false);
            expect(Cl.Utils.setStorage('test#3')).toBe(false);
            expect(Cl.Utils.setStorage()).toBe(false);
        });
    });
});
