Best Practices
==============

Browsers
--------

In order to display an automated message when JavaScript is disabled or there might be lack of support, we integrated
the `Outdated Browser <http://outdatedbrowser.com/en>`_ script within this boilerplate. Styles and settings are
automatically set from within Bootstrap.

Icons
-----

We integrated the `Font Awesome <http://fortawesome.github.io/Font-Awesome/>`_  library instead of Bootstrap's
`Glyphicons <http://getbootstrap.com/components/#glyphicons>`_ and stream the ``fa-*`` prefixes to
``icon-*`` to be more consistent and flexible when using `fontastic.me <http://fontastic.me>`_.

Libraries
---------

We are implementing the following standard libraries in addition to the default requirements from Bootstrap:

* `Class JS <https://github.com/FinalAngel/classjs>`_
* `Require JS <http://requirejs.org/>`_
* `Respond JS <https://github.com/scottjehl/Respond>`_
* `SWF Object <https://code.google.com/p/swfobject/>`_
* `HTML5 Shiv <https://code.google.com/p/html5shiv/>`_

We implemented `Bower <http://bower.io/>`_ to help you manage dependencies. Packages are automatically downloaded into
``/static/vendor/`` but **not** moved to their appropriate folders. This still requires manual work.

Editors
-------

You can use any editor you want, to make your life a bit easier we implemented `EditorConfig <http://editorconfig.org/>`_
into the boilerplate's root ``.editorconfig``.


Bootstrap Plugins
-----------------

We are implementing the following additional Bootstrap plugins into the setup:

* `Select2 <http://fk.github.io/select2-bootstrap-css/>`_
* `Cl.Debug <http://finalangel.github.io/classjs-plugins/examples/cl.debug/>`_
