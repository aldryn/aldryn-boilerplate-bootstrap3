*******
General
*******

We are using two kinds of tests: **unit** and **integration** tests.
Unit tests are simple test cases testing a single functionality within a given
JavaScript file in an isolated environment without the DOM. Integration
tests are testing the users interaction following certain move, click and
keyboard interactions.

This testing infrastructure includes them both with
`Jasmine <http://jasmine.github.io/>`_ as the test suite and
`Karma <http://karma-runner.github.io/>`_ as the test runner for unnit tests.
`Protractor <protractortest.org>`_ serves as the integration tests framework.
Both tests can be run separately as described within the *Commands* section.

All tests are located within ``/tests``. Each pull request gets validated
through `Travis <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob
/master/.travis.yml>`_ by running those tests excecuting ``gulp tests``.
You can also run this command on your local computer considering you followed
the :doc:`/general/installation` instructions.


Commands
========

The following commands are available to you:

- ``gulp tests`` runs the entire test suite
- ``gulp tests:unit`` only runs the unit tests
- ``gulp tests:integration`` only runs the integration tests
- ``gulp tests:watch`` to start karma to watch unit tests


Naming
======

The naming convention for tests follow the same :doc:`/guidelines/general`
guidelines including the :doc:`/guidelines/javascript` additions.

In addition to this, **unit tests** should be prefixed using ``test`` before
the name file name and **integration tests** use ``spec``. For example:

.. code-block:: text

    test.header.js
    test.footer.js
    test.content.typography.js
    test.content.wysiwyg.js
    ...

.. code-block:: text

    spec.header.js
    spec.footer.js
    spec.content.typography.js
    spec.content.wysiwyg.js
    ...


Structure
=========

Unit tests are located within ``/tests/unit`` and integration tests within
``/tests/integration`` to create a clear separation. There are several
configuration files available within the ``/tests`` directory described either
within :doc:`/testing/unit_tests` or :doc:`/testing/integration_tests`.

The starting structure looks like this:

.. code-block:: text

    tests/
    ├─ fixtures/
    ├─ integration/
    ├─ unit/
    ├─ base.conf.js
    ├─ karma.conf.js
    └─ protractor.conf.js


fixtures/
---------

``/tests/fixtures`` is used to load html snippets within your **unit tests**.
You simply define the path within test file, load the fixture and than
test against it.

.. code-block:: javascript

    // load the fixture
    fixture.setBase('tests/fixtures');
    this.markup = fixture.load('snippet.html');

    // test
    expect(fixture.el.firstChild).to.equal(this.markup[0][0]);

    // now let's cleanup
    fixture.cleanup()

You can find more information about this within the
`karma-fixtures <https://github.com/billtrik/karma-fixture>`_ documentation.


coverage/
---------

This folder is added when running **unit tests** either through ``gulp tests``,
``gulp tests:unit`` or ``gulp tests:watch``. Coverage uses the
`istanbul <https://gotwarlost.github.io/istanbul/>`_ tool to give you a nice
UI for debugging. Just simply launch the `index` file in either one of the
sub-folders generatet. There can be as many sub-folders as clients connected
to your runner.

It's worth to mention that the success of your project does not depend on the
tests or the percentage of your code coverage. Yet it will improve maintanance
and further development for you and other contributors. We should
"Aim for the highest" possible coverage.


Configuration
=============

The configuration files are located within the root of the ``/tests`` folder.
``karma.conf.js`` defines the settings for the ``gulp tests:unit`` command and
``protractor.conf.js`` for the ``gulp tests:integration`` command.

The function of these configuration files is described in more depth within
:doc:`/testing/unit_tests` or :doc:`/testing/integration_tests`.
