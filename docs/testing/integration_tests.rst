*****************
Integration Tests
*****************


Configuration
=============

The main configuration file to look at is ``/tests/protractor.conf.js``.
It configures our ``browserName``.

In ``browserName`` we specify the browser that will be used to launch the tests.
It can be set to ``phantomjs``, ``firefox`` or ``chrome``.

You can find more information about this in the
`protractor referenceConf.js <https://github.com/angular/protractor/blob/master/docs/referenceConf.js>`_
documentation.

All spec files should be placed in ``/tests/integration/specs`` and all page
object files should be in ``/tests/integration/pages``. So, the file organisation
structure is:

.. code-block:: text

    tests/
    └─ integration/
       ├─ specs/
       │   ├─ spec.name.js
       │   └─ spec.another.name.js
       └─ pages/
           ├─ page.name.js
           └─ page.another.name.js

The specs that will be launched are defined in the ``gulpfile.js``. They can be
specified using patterns:

.. code-block:: javascript

    return gulp.src([PROJECT_PATH.tests + '/integration/specs/*.js'])

By default all specs inside ``/tests/integration/specs`` folder will be launched.


Coverage
========

Integration coverage is measured by the number of critical path or regression
test cases that were automated. Keep in mind that the success of your project
does not depend on the tests or the percentage of your code coverage, but it
will improve maintenance and give you and other contributors more confidence in
the quality of the product you produce. We should aim for the highest possible
coverage and quality.
