*************
What's inside
*************

.. note::

    This Boilerplate includes and configures a number of components.


Sass
====

For CSS pre-processing, we use `Sass <http://sass-lang.com>`_.
In particular, we use:

* `LibSass <http://libsass.org/>`_ for fast SASS compilation
* `Gulp JS <http://gulpjs.com/>`_ and the `gulp-sass
  <https://github.com/dlmanning/gulp-sass>`_ plugin to compile SASS files
* the official `Sass port <https://github.com/twbs/bootstrap-sass>`_ of
  Bootstrap

All styles should be created in ``/private/sass``, and will be compiled to
``/static/css``.


Bootstrap
=========

The full `Bootstrap library <http://getbootstrap.com>`_ is imported via the
`Sass component <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_bootstrap.scss>`_
and the `JavaScript component <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/static/js/libs/bootstrap.min.js>`_.

.. note::

    Aldryn Bootstrap 3 uses a 24 column based grid setting instead of the default 12. You can change this setting in ``private/sass/settings/_bootstrap.scss``.


The `Glyhpicon <http://getbootstrap.com/components/#glyphicons>`_ icon set has
been `disabled <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_bootstrap.scss#L14>`_
in favour of the `Font Awesome <http://fortawesome.github.io/Font-Awesome/>`_
icon set.


Font Awesome
============

The `Font Awesome library <http://fortawesome.github.io/Font-Awesome>`_
offers a larger and better
`variety of icons <http://fortawesome.github.io/Font-Awesome/icons/>`_
than the Bootstrap defaults. Additional
`utility classes <http://fortawesome.github.io/Font-Awesome/examples/>`_
are also available.

The `library <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/fontawesome/>`_
is similarly integrated as bootstrap-sass within the ``libs`` folder.


JavaScript
==========

We are implementing the latest **2.x.x** versions of
`jQuery <http://jquery.com>`_ as they are released. In addition we encourage
the use of `class.js <https://github.com/FinalAngel/classjs>`_, a simple library
that helps out with the modular pattern in :doc:`/guidelines/javascript`.

- http://jquery.com
- https://github.com/FinalAngel/classjs

In addition several commonly-used shims are available to you including:

- `The HTML5 Shiv <https://github.com/aFarkas/html5shiv>`_
- `Respond.js <https://github.com/scottjehl/Respond>`_
- `<swfobject> <https://code.google.com/p/swfobject>`_
- `Outdated Browser <http://outdatedbrowser.com>`_
- `console.log wrapper <https://developer.chrome.com/devtools/docs/console-api>`_


Addons
------

We are currently implementing the `select2.js bootstrap version
<http://fk.github.io/select2-bootstrap-css/>`_ as default addon.


Gulp
----

We use `Gulp <http://gulpjs.com/>`_ to manage our frontend workflow.


Template Language
=================

As this is a django CMS based boilerplate, naturally we are using the
`Django template language
<https://docs.djangoproject.com/en/dev/topics/templates/>`_.

In order to implements assets efficiently,
`django-sekizai <https://github.com/ojii/django-sekizai>`_ and
`aldryn-snake <https://github.com/aldryn/aldryn-snake>`_ are implemented within
the ``base_root.html`` template. This gives you the
``{% addtoblock "js" %}{% endaddtoblock %}`` and
``{% addtoblock "css" %}{% endaddtoblock %}`` template tags in addition to the
django defaults.


Example
-------

.. code-block:: django

    {% load sekizai_tags %}
    {% addtoblock "css" %}<link href="{% static 'css/theme.css' %}" rel="stylesheet">{% endaddtoblock %}
    {% addtoblock "js" %}<script src="{% static 'libs/jquery.min.js' %}"></script>{% endaddtoblock %}

- http://docs.django-cms.org


Configuration
=============

There are several **configuration files** included such as:

- `EditorConfig <http://editorconfig.org/>`_ within  ``.editorconfig``
- `CSSComb <http://csscomb.com/>`_ within ``.csscomb.json``
- `ESLint <http://eslint.org/>`_ within ``.eslintrc.json``
- `SCSS-Lint <https://github.com/brigade/scss-lint>`_ within ``scss-lint.json``

Please mind that they are ignored if your editor doesn't support them.
