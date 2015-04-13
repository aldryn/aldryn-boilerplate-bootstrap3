Markup
======

.. note::

    In addition to the :doc:`general` guidelines, the following sections describe markup specific rules.


Naming
------

.. important::

    - Use **underscores** for html file naming
    - Use lowercase for **all** attributes

.. code-block:: html

    // good
    two_column_template.html, tpl_master.html or ask_for_additional_information.html

    <div class="box box-highlighted" data-rel="#my-modal"> ... </div>

.. code-block:: html

    // bad
    two_column-template.html, tpl-master.html, askForAdditionalInformation.html

    <DIV class="box boxHighlighted" DATA-rel="#my_modal"> ... </DIV>


Indentation
-----------

.. important::

    - Always add an indent after django tags such as ``{% if %}``, ``{% forloop %}``, ``{% block %}`` ...
    - Use single lines within ``{% addtoblock %}`` for **files** and multilines for ``<code>``
    - **Code readability** always wins

.. code-block:: django

    // good
    {% block content %}
        <div class="plugin-blog">
            {% if true %}
                <p>Hello World</p>
            {% endif %}
        </div>
    {% endblock content %}

    {% addtoblock "js" %}<script src="{% static "js/libs/jquery.min.js" %}"></script>{% endaddtoblock %}
    {% addtoblock "js" %}
    <script>
    jQuery(document).ready(function ($) {
        alert('hello world');
    });
    </script>
    {% endaddtoblock %}

.. code-block:: django

    // bad
    {% block content %}
    <div class="plugin-blog">{% if true %}<p>Hello World</p>{% endif %}</div>
    {% endblock content %}

    {% addtoblock "js" %}
    <script src="{% static "js/libs/jquery.min.js" %}"></script>
    {% endaddtoblock %}
    {% addtoblock "js" %}
        <script>
            jQuery(document).ready(function ($) {
                alert('hello world');
            });
        </script>
    {% endaddtoblock %}


IDs vs Classes
--------------

.. important::

    - Avoid IDs ad all cost
    - When using IDs always use a **unique name**

You should **always** use classes instead if ID's. Classes represent a more OOP approach of adding and removing
style sets like ``box box-wide box-hint``.

Try to avoid declaring ID's at all. They should only be used to reference form elements or for in-page navigation
in which case you need to make the name **absolutely unique**.

.. code-block:: html

    // good
    <div class="box box-highlighted box-8723"> ... </div>
    <!-- IDs only for navigation jumper through <a href="#page-anchor-team"></a> -->
    <div id="page-anchor-team"></div>
    <!-- IDs only for form elements -->
    <label for="field-id12-firstname">Name</label>
    <input type="text" name="firstname" id="field-id12-firstname">

.. code-block:: html

    // bad
    <div class="box box-highlighted" id="box-8723"> ... </div>
    <!-- IDs only for navigation jumper through <a href="#page-anchor-team"></a> -->
    <div id="team"></div>
    <!-- IDs only for form elements -->
    <label for="firstname">Name</label>
    <input type="text" name="firstname" id="firstname">


Modular
-------

.. important::

    Try to keep the HTML structure simple and avoid unnecessary elements. It is sometimes easier to use a single div with
    a single class rather than multiple divs with multiple classes.

For example, lets take a look at the following code snippet:

.. code-block:: html

    <div class="addon-blog">
        <h2>My Blog</h2>
        <p>Hello World</p>
    </div>

We should handle HTML modular and avoid type selectors at all costs. Add additional classes for lead, content, author,
meta infos, tags and so on. The content section itself can than contain the usual html code:

.. code-block:: html

    <div class="addon-blog">
        <h2 class="blog-heading">My Blog</h2>
        <p class="blog-lead">Hello World</p>
        <div class="blog-content">
            <h3>Details</h3>
            <p>More</p>
            <p>Content</p>
        </div>
        <div class="blog-author">Dummy Man</div>
        <ul class="blog-tags tags">
            <li class="blog-tag-items"><a href="#">News</a>
            <li class="blog-tag-items"><a href="#">Blog</a>
            <li class="blog-tag-items"><a href="#">Tags</a>
        </ul>
    </div>
