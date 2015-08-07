**********
Unit Tests
**********


Configuration
=============

The main configuration file to look at is ``/tests/karma.conf.js``.
It configures our **files**, **exclude** and **preprocessors** paths.

In **files** you add all the files required to be loaded in your tests.
For example if we do not add jQuery into this array, we would not have it
available to us while the tests run.

The **exclude** setting allows us to specifically exclude certain files from
loading in the browser. By defining a path - say ``addons/*.js`` in
``exclude`` - we can exclude scripts such as ``addons/myscript.js``.

Finally, add all files you want to be covered to **preprocessors**. We do not
simply include all files, as we cannot guarantee the coverage of libraries or
3rd party addons.


Fixtures
========

``/tests/fixtures`` is used to load HTML snippets in your **unit tests**.
Simply define the path in test file, load the fixture and then test against
it.

.. code-block:: javascript

    // load the fixture
    fixture.setBase('tests/fixtures');
    this.markup = fixture.load('snippet.html');

    // test
    expect(fixture.el.firstChild).to.equal(this.markup[0][0]);

    // now let's cleanup
    fixture.cleanup()

You can find more information about this in the
`karma-fixtures <https://github.com/billtrik/karma-fixture>`_ documentation.


Coverage
========

This folder is added when running **unit tests** either through ``gulp tests``,
``gulp tests:unit`` or ``gulp tests:watch``. Coverage uses the
`istanbul <https://gotwarlost.github.io/istanbul/>`_ tool to give you a nice
UI for debugging. Just simply launch the `index` file in either one of the
sub-folders generated. There can be as many sub-folders as clients connected
to your runner.

It's worth to mention that the success of your project does not depend on the
tests or the percentage of your code coverage, but it will improve maintenance
and further development for you and other contributors. We should aim for the
highest possible coverage.
