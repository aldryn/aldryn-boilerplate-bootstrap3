Best Practices
==============

Naming
------

    “There are only two hard things in Computer Science:
    cache invalidation and naming things
    – Phil Karlton”

As you can spend hours in scheming name patterns, structure and conventions we only advice to follow the
`BEM principles <https://bem.info/>`_  but using as a separator **one dash** only and always
lowercase format: ``blockname-elementname``.

Automation
----------

We try to make our live as easy as possible. For this reason we implemented `Gulp JS <http://gulpjs.com/>`_ as task
runner instead of Grunt as we prefer **code over configuration**. There are some helpful commands available:

* ``gulp`` runs gulp lint browser and watch commands
* ``gulp lint`` lints all JavaScript using ``.jshintrc`` and ``.jscsrc``
* ``gulp images`` optimised images within ``/static/img``
* ``gulp browser`` connects to a given server (django) and runs livereload on ``http://0.0.0.0:3000``
* ``gulp watch`` starts a watch command for linting

Bootstrap Plugins
-----------------

We are implementing the following additional Bootstrap plugins into the setup:

* `Select2 <http://fk.github.io/select2-bootstrap-css/>`_
* `Cl.Debug <http://finalangel.github.io/classjs-plugins/examples/cl.debug/>`_

Browsers
--------

In order to display an automated message when JavaScript is disabled or there might be lack of support, we integrated
the `Outdated Browser <http://outdatedbrowser.com/en>`_ script within this boilerplate. Styles and settings are
automatically set from within Bootstrap.

Editors
-------

You can use any editor you want, to make your life a bit easier we implemented `EditorConfig <http://editorconfig.org/>`_
into the boilerplate's root ``.editorconfig``.

Icons
-----

We integrated the `Font Awesome <http://fortawesome.github.io/Font-Awesome/>`_ library in addition of Bootstrap's
`Glyphicons <http://getbootstrap.com/components/#glyphicons>`_ icons while disabling the Glyphicons as a default.
You can reanable them within the `according settings<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/develop/private/sass/libs/_bootstrap.scss#L14>`_.

Libraries
---------

We are implementing the following standard libraries in addition to the default requirements from Bootstrap:

* `Class JS <https://github.com/FinalAngel/classjs>`_
* `Respond JS <https://github.com/scottjehl/Respond>`_
* `SWF Object <https://code.google.com/p/swfobject/>`_
* `HTML5 Shiv <https://code.google.com/p/html5shiv/>`_

We implemented `Bower <http://bower.io/>`_ to help you manage dependencies. Packages are automatically downloaded into
``/static/vendor/`` but **not** moved to their appropriate folders. This still requires manual work.

Tests
-----

We currently implemented a basic test framework within ``static/js/tests`` using QUnit. YOu can simply run tests
using the Gulp command ``gulp tests``.
