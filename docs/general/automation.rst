Automation
==========

We try to make our live as easy as possible. For this reason we implemented `Gulp JS <http://gulpjs.com/>`_ as task
runner instead of Grunt as we prefer **code over configuration**. There are some helpful commands available:

* ``gulp`` runs gulp lint browser and watch commands
* ``gulp lint`` lints all JavaScript using ``.jshintrc`` and ``.jscsrc``
* ``gulp docs`` generates JavaScript API documentation into ``static/docs``
* ``gulp images`` optimised images within ``/static/img``
* ``gulp browser`` connects to a given server (django) and runs livereload on ``http://0.0.0.0:3000``
* ``gulp watch`` starts a watch command for linting


