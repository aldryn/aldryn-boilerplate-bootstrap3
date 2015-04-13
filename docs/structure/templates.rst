Templates
=========

.. note::

    The entry point for every website is ``/templates/base.html`` following the rules of the `django template engine
    <https://docs.djangoproject.com/en/dev/topics/templates/>`_. Templates usually ``{% extends %}`` from ``base.html``.
    The base file itself extends from ``base_root.html``. This is a good example of how Django's template inheritance
    is working.

The following templates are always required:

- ``404.html`` for 404 error handling
- ``500.html`` for critical errors, **only add generic html without template tags**
- ``base.html`` as entry point for ``{% extends %}``


includes/
---------

Global inclusion files should be added here such as the `navigation
<http://django-cms.readthedocs.org/en/develop/reference/navigation.html>`_, `django messages
<https://docs.djangoproject.com/en/dev/ref/contrib/messages/>`_ or tracking codes. Create additional */include* folders
within addons to not overcrowd this directory.


Page Templates
--------------

django CMS allows you to set `CMS_TEMPLATES
<http://docs.django-cms.org/en/latest/reference/configuration.html#cms-templates>`_
which can be chosen within the CMS by the user.

.. image:: ../_static/toolbar-templates.png

The following templates are provided from the start:

- ``fullwidth.html`` uses the 100% span of the Bootstrap grid
- ``sidebar_left.html`` creates a left sidebar with the content placed on the right
- ``sidebar_right.html`` creates a right sidebar with the content placed on the left
- ``tpl_home.html`` specific template for the landing page


Page Types
----------

You can save a CMS page as "Page Type" and re-use it later when creating a new page. Simply select ``Page > Save as Page
Type ..`` and choose a name. You can create a new page by selecting ``Page > Add Page > New Page`` and choose the
"Page type" you want to use. That drop down does not show up if there are no page types saved.

Page types get listed separately within the menu tree underneath *Page Types*.
This allows you can change or delete them at any time if required.

.. image:: ../_static/toolbar-page-types.png


Blocks and Placeholders
-----------------------

The content block ``{% block content %}{% endblock %}`` and placeholder ``{% placeholder content %}`` always need
to be present within page templates.
