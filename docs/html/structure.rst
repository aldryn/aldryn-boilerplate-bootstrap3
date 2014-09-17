Structure
=========

Django automatically looks for a ``base.html`` yet our base extends ``base_root.html``. This is a good example of how
Django's template inheritance is working. In order to keep the basic html structure minimalistic, we outsource
all head and foot relevant code into base_html which makes this file better maintainable.


Where to start
--------------

Build your general structure within **base.html**. This includes namely the header and the footer.
Do not split up header and footer into separate files, you can use django blocks and overwrite default
behaviours when needed. Additional structure should be defined within the CMS templates:


Content Management
------------------

Within ``setting.py`` we can define so called **Templates** which are than available over django CMS toolbars
**Page > Templates** UI. These templates can have a different structures. In the boilerplate there are four
predefined templates:

* fullsize.html
* sidebar_left.html
* sidebar_right.html
* tpl_home.html

When choosing a name, be descriptive about their uses as the customer can set them by himself. If I would add a more
narrow header option for fullsize, I would simply call it ``fullsize_simple.html``.


Menu
----

All menu relevant templates are kept within ``templates/includes/menu/*.html``. These display what classes are used
to render a navigation, breadcrumb or even the pagenav.


Messages
--------

You need to be aware of the `django message framework <https://docs.djangoproject.com/en/dev/ref/contrib/messages/>`_
which displays global notifications or error messages. This file is kept within ``templates/includes/messages.html``
and included within ``templates/base.html``.

Analytics
---------

Store all analytics code within the designated file in ``templates/includes/analytics.html`` which will be injected
right after the opening ``<body>`` tag. Google Analytics is already pre-prepared and will be shown when adding
the required UA-XXXXX code within the CMS.
