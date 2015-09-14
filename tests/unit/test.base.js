/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/aldryn/aldryn-boilerplate-bootstrap3
 */

'use strict';
/* global Cl, describe, it, expect, fixture, beforeEach, outdatedBrowser */

// #############################################################################
// UNIT TEST
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
});
