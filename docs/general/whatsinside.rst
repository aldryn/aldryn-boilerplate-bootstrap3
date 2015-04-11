What's Inside
=============

.. note::

    The following components and settings are used within this boilerplate


SASS vs LESS
------------

A discussion which we don't want to start here. We are prefering the SASS port of Bootstrap and the comprehensive
Compass CSS Authoring Framework. As such all styles are placed within ``/private/sass`` and get compiled to
``/static/css``.

- http://sass-lang.com
- http://compass-style.org


Bootstrap
---------

The full bootstrap library is imported via the `sass component
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_bootstrap.scss>`_
and the `javascript component
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/static/js/libs/bootstrap.min.js>`_.
The `Glyhpicon <http://getbootstrap.com/components/#glyphicons>`_ icon set has been `disabled
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_bootstrap.scss#L14>`_
in favor of the `Font Awesome <http://fortawesome.github.io/Font-Awesome/>`_ icon set.

- http://getbootstrap.com


Font Awesome
------------

The Font Awsome library offers a larger `variety of icons <http://fortawesome.github.io/Font-Awesome/icons/>`_
than the bootstrap defaults and additional `utility classes <http://fortawesome.github.io/Font-Awesome/examples/>`_.
We implemented the `library
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_fontawesome.scss>`_
separately from the `icon choices
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/layout/_iconography.scss>`_.
This allows for a better customization and integration of other icon fonts.

- http://fortawesome.github.io/Font-Awesome/examples


JavaScript
----------

We are implementing the latest **2.x.x** versions of jQuery as they are being released. In addition we implement
`class.js <https://github.com/FinalAngel/classjs>`_ to support the :doc:`../structure/javascript`.

At last you find several shivs such as the html5shiv.js, respond.js, swfobject.js, outdatedBrowser.js and a console.log
wrapper.

- http://jquery.com
- https://github.com/FinalAngel/classjs
- https://github.com/aFarkas/html5shiv
- https://github.com/scottjehl/Respond
- https://code.google.com/p/swfobject
- http://outdatedbrowser.com
- http://patik.com/blog/complete-cross-browser-console-log/


Addons
******

We are currently implementing select2.js and cl.debug.js as default addons.

- http://fk.github.io/select2-bootstrap-css/
- http://finalangel.github.io/classjs-plugins/


Template Language
-----------------

As this is a django CMS based boilerplate, naturally we are using the `django template language
<https://docs.djangoproject.com/en/dev/topics/templates/>`_.

In order to implements assets efficiently, `django-sekizai <https://github.com/ojii/django-sekizai>`_ and
`aldryn-snake <https://github.com/aldryn/aldryn-snake>`_ are implemented within the ``base_root.html`` template.
This gives you the ``{% addtoblock "js" %}{% endaddtoblock %}`` and ``{% addtoblock "css" %}{% endaddtoblock %}``
template tags in addition to the django defaults.

Example
*******

.. code-block:: django

    {% load sekizai_tags %}
    {% addtoblock "css" %}<link href="{% static "css/theme.css" %}" rel="stylesheet">{% endaddtoblock %}
    {% addtoblock "js" %}<script src="{% static "libs/jquery.min.js" %}"></script>{% endaddtoblock %}

- http://docs.django-cms.org


Configuration
-------------

There are several **configuration files** included within the boilerplate such as:

- `EditorConfig <http://editorconfig.org/>`_ within  ``.editorconfig``
- `CSSComb <http://csscomb.com/>`_ within ``.csscomb.json``
- `JSCS <http://jscs.info/>`_ within ``.jscsrc``
- `JSLint <http://www.jslint.com/>`_ within ``.jshintrc``
- `SCSS-Lint <https://github.com/brigade/scss-lint>`_ within ``scss-lint.json``

mind that these do not do anything if your editor doesn't support them.