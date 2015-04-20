************
Installation
************

.. note::

    The following dependencies should be installed on your system in order to work with this Boilerplate.

- Ruby: https://www.ruby-lang.org/
- Sass: http://sass-lang.com/
- Compass: http://compass-style.org/
- SCSS-Lint: https://github.com/brigade/scss-lint
- Bootstrap: https://github.com/twbs/bootstrap-sass
- Node JS: http://nodejs.org/
- Gulp: http://gulpjs.com/

You can find most installation steps within `osx-bootstrap <https://github.com/divio/osx-bootstrap>`_ but in short:

#. run ``ruby -v`` ensure ruby is installed
#. run ``gem update --system``
#. run ``gem install sass``
#. run ``gem install compass``
#. run ``gem install scss-lint``
#. run ``gem install bootstrap-sass``
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

    Please mind that ``gulp`` also starts *browserSync* equal to ``gulp browser`` which tries to connect to a
    Django server. The Django setup is **not included** within this boilerplate.

All front-end related tasks are handled via the `Gulp <http://gulpjs.com/>`_ task runner:

- ``gulp`` runs the gulp defaults
- ``gulp watch`` runs the gulp watch defaults
- ``gulp lint`` starts all linting services using ``.jshintrc``, ``.jscsrc`` and ``scss-lint.json``
- ``gulp preprocess`` optimises images within ``/static/img`` and compiles YUIDoc into ``static/docs``
- ``gulp browser`` connects to a given server (django) and runs live reload on a separate IP
- ``gulp tests`` runs the test suite

We also offer some standalone commands:

- ``gulp jslint`` runs JavaScript linting
- ``gulp scsslint`` runs Sass linting
- ``gulp images`` optimises images within ``/static/img``
- ``gulp docs`` compiles YUIDoc into ``static/docs``

We love code over configuration.


Sass Compilation
================

You can compile/watch Sass using the following commands from within the root:

- ``compass compile private`` to compile the css
- ``compass watch private`` to constantly watch for changes and compile

The configuration will automatically be applied from ``/private/config.rb``.
