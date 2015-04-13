What's Inside
=============

.. note::

    The following components and settings are included within this boilerplate for your convinience.


SASS vs LESS
------------

A discussion which, we don't want to start here. We are prefering the official `SASS port
<https://github.com/twbs/bootstrap-sass>`_ of Bootstrap and the comprehensive
Compass CSS Authoring Framework. As such all styles are placed within ``/private/sass`` and get compiled to
``/static/css``.

- http://sass-lang.com
- http://compass-style.org


Bootstrap
---------

The full Bootstrap library is imported via the `SASS component
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_bootstrap.scss>`_
and the `JavaScript component
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/static/js/libs/bootstrap.min.js>`_.
The `Glyhpicon <http://getbootstrap.com/components/#glyphicons>`_ icon set has been `disabled
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_bootstrap.scss#L14>`_
in favor of the `Font Awesome <http://fortawesome.github.io/Font-Awesome/>`_ icon set.

- http://getbootstrap.com


Font Awesome
------------

The Font Awsome library offers a larger `variety of icons <http://fortawesome.github.io/Font-Awesome/icons/>`_
far superior than the bootstrap defaults and additional `utility classes
<http://fortawesome.github.io/Font-Awesome/examples/>`_ are available to you. We implemented the `library
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/libs/_fontawesome.scss>`_
separately from the `icon choices
<https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/private/sass/layout/_iconography.scss>`_.
This allows for a better customization and integration of other icon fonts or services.

- http://fortawesome.github.io/Font-Awesome


JavaScript
----------

We are implementing the latest **2.x.x** versions of jQuery as they are being released. In addition we encourage the use
of `class.js <https://github.com/FinalAngel/classjs>`_, a simple library that helps out with the modular pattern in
:doc:`../guidelines/javascript`.

- http://jquery.com
- https://github.com/FinalAngel/classjs

In addition several commonly used shivs stand available to you including:

- `The HTML5 Shiv <https://github.com/aFarkas/html5shiv>`_
- `Respond.js <https://github.com/scottjehl/Respond>`_
- `<swfobject> <https://code.google.com/p/swfobject>`_
- `Outdated Browser <http://outdatedbrowser.com>`_
- `console.log wrapper <https://developer.chrome.com/devtools/docs/console-api>`_

Addons
******

We are currently implementing the select2.js bootstrap version and cl.debug.js as default addons.

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

There are several **configuration files** included such as:

- `EditorConfig <http://editorconfig.org/>`_ within  ``.editorconfig``
- `CSSComb <http://csscomb.com/>`_ within ``.csscomb.json``
- `JSCS <http://jscs.info/>`_ within ``.jscsrc``
- `JSLint <http://www.jslint.com/>`_ within ``.jshintrc``
- `SCSS-Lint <https://github.com/brigade/scss-lint>`_ within ``scss-lint.json``

Please mind that they are ignored if your editor doesn't support them.