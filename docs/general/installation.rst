Installation
============

.. note::

    The following dependencies should be installed on your system in order to work with this boilerplate.

- Sass: http://sass-lang.com/
- Compass: http://compass-style.org/
- Bootstrap: https://github.com/twbs/bootstrap-sass
- Node JS: http://nodejs.org/
- Gulp: http://gulpjs.com/


Setup
-----

Ensure you run the following commands to install all requirements form within the root:

- ``npm install`` to install the requirements from ``package.json``
- ``bower install`` to install the requirements from ``bower.json`` via ``.bowerrc``


Gulp Commands
-------------

All front-end related tasks are handled via the `Gulp <http://gulpjs.com/>`_ task runner:

- ``gulp`` runs the gulp defaults
- ``gulp watch`` runs the gulp watch defaults
- ``gulp lint`` starts all linting services using ``.jshintrc``, ``.jscsrc`` and ``scss-lint.json``
- ``gulp preprocess`` optimizes images within ``/static/img`` and compiles YUIDoc into ``static/docs``
- ``gulp browser`` connects to a given server (django) and runs livereload on a separate IP
- ``gulp tests`` runs the test suite

We also offer certain single commands:

- ``gulp jslint`` runs JavaScript linting
- ``gulp scsslint`` runs SASS linting
- ``gulp images`` optimizes images within ``/static/img``
- ``gulp docs`` compiles YUIDoc into ``static/docs``

We love code over configuration.


SASS Compilation
----------------

You can compile/watch SASS using the following commands from within the root:

- ``compass compile private`` to compile the css
- ``compass watch private`` to constantly watch for changes and compile

The configuration will automatically be applied from ``/private/config.rb``.
