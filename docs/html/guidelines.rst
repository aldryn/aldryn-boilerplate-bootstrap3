Guidelines
==========

* Use **4 space intendation** and **not** tabs
* Use **underscores** for html file naming
* Use **double-quotes** `"` for all attributes including django-template tags
* Use lowercase for **all** attributes
* HTML **has to validate** using `W3C <http://www.w3.org/2001/sw/BestPractices/>`_ guidelines
* HTML should validate the WCAG 2.0 A guidelines
* HTML should be modular and reusable, do not use easy names like "job" or "item" on top level. Use "addon-jobs" instead
* Use XML syntax and close all elements using </tag> or />
* Keep all html on the same level after a django template block
* Ignore to rule on top for ``{% if %}`` or ``{% forloop %}``
* All templates should be placed within the roots ``templates/`` folder
* In general **code readability first**


Example
*******

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


IDs vs Classes
--------------

You should **always** use classes instead if id's. Classes represent a more OOP approach of adding and removing
stylesets like ``box box-wide box-hint``.

The ID attribute should be preserved for javascript functionality or for anchor referencing in conjunction with
hashes.


Elements
--------

Try to keep the html structure simple and avoid unnecessary elements. It is sometimes easier to use a single div with
a single class rather than multiple divs with multiple classes:

.. code-block:: html

    <div class="addon-blog">
        <h2>My Blog</h2>
        <p>Hello World</p>
    </div>

We don't need to add specific classes to the **h2** as we can control the inner style using ``.addon-blog``. However
more complicated structures such as lead, content, author, metainfos, tags can require their own class names:

.. code-block:: html

    <div class="addon-blog">
        <h2>My Blog</h2>
        <p class="blog-lead">Hello World</p>
        <div class="blog-content">
            <h3>Details</h3>
            <p>More</p>
            <p>Content</p>
        </div>
        <div class="blog-author">Dummy Man</div>
        <ul class="blog-tags tags">
            <li><a href="#">News</a>
            <li><a href="#">Blog</a>
            <li><a href="#">Tags</a>
        </ul>
    </div>
