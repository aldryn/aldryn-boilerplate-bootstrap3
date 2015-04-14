Testing
#######

.. warning::

    The test framework is currently in development.


General
=======

We are using the `Jasmine <http://jasmine.github.io/>`_ test suite and the `Karma <http://karma-runner.github.io/>`_
test runner for behaviour driven tests. All tests are located within ``/tests``. You cna run them by excecuting
``gulp tests`` within your console.

Name the files according to the :doc:`../guidelines/general` and additional guidelines and use proper prefixing,
for example:

.. code-block:: text

    test.header.js
    test.footer.js
    test.content.typography.js
    test.content.wysiwyg.js
    ...
