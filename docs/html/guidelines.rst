Guidelines
==========

* Use **tabs** and **not** spaces
* Use **underscores** for html file naming
* Use **double-quotes** `"` for all attributes including django-template tags
* HTML **has to validate** using `W3C <http://www.w3.org/2001/sw/BestPractices/>`_ guidelines
* HTML should validate the WCAG 2.0 A guidelines
* HTML should be modular and reusable, do not use easy names like "job" or "item" on top level. Use "addon-jobs" instead
* Use XML syntax and close all elements using </tag> or />
* Keep all html on the same level after a django template block
* Ignore to rule on top for ``{% if %}`` or ``{% forloop %}``
* All templates should be placed within the roots ``templates/`` folder
* In general **code readability first**


Example
-------

.. code-block:: html

    {% block content %}
    <div class="plugin-blog">
    {% if true %}
        <p>Hello World</p>
    {% endif %}
    </div>
    {% endblock content %}

    {% addtoblock "js" %}<script src="{% static "js/libs/class.min.js" %}"></script>{% endaddtoblock %}
    {% addtoblock "js" %}
    <script>
    jQuery(document).ready(function ($) {
        alert('hello world');
    });
    </script>
    {% endaddtoblock %}
