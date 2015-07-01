*******
General
*******

We are using two kinds of tests: **unit** and **integration** tests.
Unit tests are simple test cases testing a single functionality within a given
JavaScript file in an isolated environment without the DOM. Integration
tests are testing the users interaction following certain move, click and
keyboard interactions.

All tests are located within ``/tests``. Each pull request gets validated
through `Travis <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob
/master/.travis.yml>`_
by running those tests using ``gulp tests``. You can also run this command on
your local computer considering you followed the :doc:`/general/installation`
instructions.


Commands
========

The following commands are available to you:

- ``gulp tests`` runs the entire test suite
- ``gulp tests:unit`` only runs the unit tests
- ``gulp tests:integration`` only runs the integration tests


Naming
======


Name the files according to the :doc:`/guidelines/general` guidelines and
consider the :doc:`/guidelines/javascript` additions for proper prefixing.

Unit tests should be prefixed using ``test`` before the name of the file
and integration tests should use ``spec``. For example:

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

Unit tests located within ``/tests/unit`` and integration tests within
``/tests/integration``. There are several configuration files available within
the ``/tests`` directory that we will have a look later on. The general
structure looks as follows:

.. code-block:: text

    tests/
    ├─ fixtures/
    ├─ integration/
    ├─ unit/
    ├─ base.conf.js
    ├─ karma.conf.js
    └─ protractor.conf.js

``/fixtures`` preserves as a folder where we can add html or json fixtures when
we need certain html markup to be present for **unit tests**. This folder is
not used for integration tests as we are interacting with a browser there.


Configuration
=============

The configuration files are located within the root of the ``/tests`` folder.
``karma.conf.js`` defines the settings for the ``gulp tests:unit`` command and
``protractor.conf.js`` for the ``gulp tests:integration`` command.


Coverage
========

The success of your project does not depend on the tests or the percentage of
your code coverage. Yet it will improve maintanance and further development
for you and other contributors. We should "Aim for the highest" possible test
coverage.


