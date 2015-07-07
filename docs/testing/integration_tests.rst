*****************
Integration Tests
*****************


Configuration
=============

The main configuration file to look at is ``/tests/protractor.conf.js``.
It configures our **specs**, **exclude** and **suites** paths.

Inside **specs** we specify the location of all specs that should be launched.
It can be set to run all tests that are in the specs folder like this ``specs: ['specs/*.js']``.

The **exclude** setting allows us to specifically exclude certain specs from
running. By defining a path - say ``specs/spec.log*.js`` in ``exclude`` - we
can exclude scripts such as ``specs/spec.login.js`` and ``specs/spec.logout.js``
from being launched.

Alternatively, **suites** may be used - we can group spec files into suites
with the keyword. For example we can add 2 tests into suite like this:

.. code-block:: javascript

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        logInOut: ['specs/spec.login.js', 'specs/spec.logout.js']
    }

Or you can also specify specs using patterns:

.. code-block:: javascript

    suites: {
        logInOut: ['specs/spec.log*.js']
    }

You can find more information about this within the
`protractor referenceConf.js <https://github.com/angular/protractor/blob/master/docs/referenceConf.js>`_ documentation.


Coverage
========

Integration coverage is measured by the number of critical path or regression
test cases that were automated. Keep in mind that the success of your project
does not depend on the tests or the percentage of your code coverage, but it
will improve maintenance and give you and other contributors more confidence in
the quality of the product you produce. We should aim for the highest possible
coverage and quality.
