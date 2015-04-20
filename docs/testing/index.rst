#######
Testing
#######

.. note::

    We are using the `Jasmine <http://jasmine.github.io/>`_ test suite and the `Karma <http://karma-runner.github.io/>`_
    test runner for behaviour driven tests.


*******
General
*******

All tests are located within ``/tests``. Each pull request gets validated through `Travis
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/.travis.yml>`_ by running those tests
using ``gulp tests``. You can also run this command on your local computer considering you followed the
:doc:`/general/installation` instructions.


*********
Structure
*********

Name the files according to the :doc:`/guidelines/general` guidelines and consider the :doc:`/guidelines/javascript`
additions for proper prefixing, for example:

.. code-block:: text

    test.header.js
    test.footer.js
    test.content.typography.js
    test.content.wysiwyg.js
    ...


********
Coverage
********

The success of your project does not depend on the tests or the percentage of your code coverage. Yet it will
improve maintanance and further development for you and other contributors. We should "Aim for the highest" possible
test coverage.
