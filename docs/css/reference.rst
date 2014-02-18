Reference
=========

You can use the full power of the `django template language <https://docs.djangoproject.com/en/dev/topics/templates/>`_.
Additionally the following libraries are on your disposal:


Django CMS
----------

In order for `django-cms <http://docs.django-cms.org/en>`_ to work, you need to include the **css** and **js**
sekizai blocks and add ``{% cms_toolbar %}`` after the closing ``</body>`` tag.


Django Sekizai
--------------

With `sekizai <https://github.com/ojii/django-sekizai>`_ you can include additional assets such as CSS or JavaScript.
Simply add ``{% load sekizai_tags %}`` on top of your file and use ``{% addtoblock "js" %}`` or
``{% addtoblock "css" %}``.

When including a single file, do not add any white spaces or breaks inside. Sekizai validates code for dublicates and
comfortably only includes one instance. So if you already include jQuery, sekizai will only render it **once**.

The output is rendered within ``{% render_block "css" %}`` and ``{% render_block "js" %}`` in
``templates/base_root.html``.

Example
*******

.. code-block:: html

    {% load sekizai_tags %}
    {% addtoblock "css" %}<script src="{% static "css/theme.css" %}"></script>{% endaddtoblock %}
    {% addtoblock "js" %}
    <script>
    jQuery(document).ready(function ($) {
        alert('hello world');
    });
    </script>
    {% endaddtoblock %}


Django Compress
---------------

`Django compressor <https://github.com/django-compressor/django-compressor>`_ should also be enabled within your setup.
This allows you to compress files automatically on a live system.

Example
*******

.. code-block:: html

    {% load compress %}

    {% compress js %}
    <script src="{% static "js/base.js" %}"></script>
    <script>obj.value = 'value';</script>
    {% endcompress %}


Aldryn Snake
------------

Aldryn snakes behaves similar to django-sekizai but is mostly used within the backend. The output is rendered within
``{{ ALDRYN_SNAKE.render_head }}`` and ``{{ ALDRYN_SNAKE.render_tail }}``.

Aldryn snakes allows the additional insertion of html fragments or any other textual data.