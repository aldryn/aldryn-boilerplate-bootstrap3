************
Installation
************

.. note::

    The following dependencies should be installed on your system in order to
    work with this Boilerplate.

- Sass: http://sass-lang.com/
- Bootstrap: https://github.com/twbs/bootstrap-sass
- Node JS: http://nodejs.org/
- Gulp: http://gulpjs.com/

You can find most installation steps within
`osx-bootstrap <https://github.com/divio/osx-bootstrap>`_ but in short:

#. run ``brew install node`` when using `Homebrew <http://brew.sh/>`_
#. run ``curl -L https://npmjs.org/install.sh | sh``
#. run ``npm install -g bower``
#. run ``npm install -g gulp``

At last make sure you correctly configured your
`paths <https://github.com/divio/osx-bootstrap/blob/master/core/npm.sh#L16>`_.


Setup
=====

Run the following commands to install all requirements from within the root of the package:

- ``npm install`` to install the requirements from ``package.json``
- ``bower install`` to install the requirements from ``bower.json`` via ``.bowerrc``


Gulp Commands
=============

.. warning::

    Please mind that ``gulp browser`` starts *browserSync* which tries to
    connect to a server. A Django server can be started from within
    ``tools/server``. Refer the :doc:`/testing/general` section for
    additional information.

All front-end related tasks are handled via the `Gulp <http://gulpjs.com/>`_
task runner:

- ``gulp`` runs the gulp defaults
- ``gulp browser`` connects to a given server (django) and runs live reload on a separate IP
- ``gulp lint`` starts all linting services using ``.eslintrc.json`` and ``scss-lint.json``
- ``gulp preprocess`` optimises images within ``/static/img`` and compiles YUIDoc into ``static/docs``
- ``gulp sass`` to compile the stylesheets
- ``gulp tests`` runs the test suite
- ``gulp watch`` runs the gulp watch defaults

We also offer some standalone commands:

- ``gulp bower`` to install the bower dependencies
- ``gulp images`` optimises images within ``/static/img``
- ``gulp icons`` to create a custom icon webfont
- ``gulp docs`` compiles YUIDoc into ``static/docs``
- ``gulp lint:javascript`` runs JavaScript linting
- ``gulp lint:sass`` runs Sass linting
- ``gulp tests:unit`` runs unit tests
- ``gulp tests:integration`` runs integration tests
- ``gulp tests:watch`` runs tests in debugging mode

We love code over configuration.
