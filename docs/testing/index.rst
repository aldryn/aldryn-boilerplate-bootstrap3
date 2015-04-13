Testing
#######

.. warning::

    The test framework is currently in development.


JavaScript
==========

We are using the `Jasmine <http://jasmine.github.io/>`_ test suite and the `Karma <http://karma-runner.github.io/>`_
test runner for JavaScript tests. Tests are added within ``/static/js/tests``. For running the tests you need to run
``gulp tests`` within your console.

Name the files according to the :doc:`../guidelines/javascript` guidelines and use proper prefixing:

.. code-block:: text

    test.header.js
    test.footer.js
    test.content.typography.js
    test.content.wysiwyg.js
    ...
