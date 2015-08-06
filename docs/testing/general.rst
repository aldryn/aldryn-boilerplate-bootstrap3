*******
General
*******

We use two kinds of tests: **unit** and **integration** tests. Unit tests are
simple test cases, that test a single piece of functionality within a given
JavaScript file in an isolated environment without the DOM. Integration tests
test the users interaction following certain move, click and keyboard
interactions.

This testing infrastructure includes them both with `Jasmine
<http://jasmine.github.io/>`_ as the test suite and `Karma
<http://karma-runner.github.io/>`_ as the test runner for unit tests.
`Protractor <http://www.protractortest.org>`_ serves as the integration tests framework.
Both tests can be run separately as described in :ref:`testing_commands` below.

All tests are located within ``/tests``. Each pull request is validated on
`Travis <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob
/master/.travis.yml>`_, which runs the test executing the ``gulp tests``
command. You can also run this command locally, if you followed the
:doc:`/general/installation` instructions.

.. _testing_commands:

Commands
========

The following commands are available to you:

- ``gulp tests`` runs the entire test suite
- ``gulp tests:unit`` only runs the unit tests
- ``gulp tests:integration`` only runs the integration tests
- ``gulp tests:watch`` to start karma to watch unit tests


Naming
======

The naming for tests should adhere to the conventions established in
:doc:`/guidelines/general` and :doc:`/guidelines/javascript`.

**Unit tests** should be prefixed using ``test`` before the name file name and
**integration tests** use ``spec``. For example:

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
configuration files available within the ``/tests`` directory described in
:doc:`/testing/unit_tests` and :doc:`/testing/integration_tests` respectively.

The starting structure looks like this:

.. code-block:: text

    tests/
    ├─ fixtures/
    ├─ integration/
    ├─ unit/
    ├─ base.conf.js
    ├─ karma.conf.js
    └─ protractor.conf.js

Fixtures and coverage are described in more depth within
:doc:`/testing/unit_tests`.


Configuration
=============

The configuration files are located at the root of the ``/tests`` folder.
``karma.conf.js`` defines the settings for the ``gulp tests:unit`` command and
``protractor.conf.js`` for the ``gulp tests:integration`` command.

The function of these configuration files is described in more depth within
:doc:`/testing/unit_tests` or :doc:`/testing/integration_tests`.


Browserslist
============

`Browserslist <https://github.com/ai/browserslist>`_ enables us to provide a
compiled and ready to use browser-list to services such as Sauce Labs,
Autoprefixer and more.

Simply add the required browser to the ``browserslist`` file. Our configuration
includes the `last 2 versions` and `ie >= 9`.


Local Server
============

You need to be able to run
`django <https://docs.djangoproject.com/en/1.8/intro/install/>`_ to start a
local server:

- run ``cd tools/server``
- run ``make install`` to setup the server
- run ``make run`` to start the server

the development server will be reachable on ``http://0.0.0.0:8000/``
