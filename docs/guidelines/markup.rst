Markup
======

.. note::

    In addition to the general guidelines, the following sections describe markup specific rules.


Naming
------

.. admonition:: Files
    :class: `important`

    - Use **underscores** for html file naming
    - Use lowercase for **all** attributes

Valid
*****

.. code-block:: text

    two_column_template.html, tpl_master.html or ask_for_additional_information.html

.. code-block:: html

    <div class="box box-highlighted" data-rel="#my-modal"> ... </div>

Invalid
*******

.. code-block:: text

    two_column-template.html, tpl-master.html, askForAdditionalInformation.html

.. code-block:: html

    <DIV class="box boxHighlighted" DATA-rel="#my_modal"> ... </DIV>


Indendation
-----------

.. admonition:: Django
    :class: `important`

    - Always add an indend after django tags such as ``{% if %}``, ``{% forloop %}``, ``{% block %}`` ...
    - Use singlelines within ``{% addtoblock %}`` for **files** and multilines for ``<code>``
    - **Code readability** always wins

Valid
*****

.. code-block:: django

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

Invalid
*******

.. code-block:: django

    {% block content %}
    <div class="plugin-blog">{% if true %}<p>Hello World</p>{% endif %}</div>
    {% endblock content %}

    {% addtoblock "js" %}
    <script src="{% static "js/libs/class.min.js" %}"></script>
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

.. admonition:: Don't use IDs
    :class: `important`

    - Avoid IDs ad all cost
    - When using IDs always use a **unique name**

You should **always** use classes instead if ID's. Classes represent a more OOP approach of adding and removing
style sets like ``box box-wide box-hint``.

Try to avoid declaring ID's at all. They should only be used to reference form elements or for in-page navigation
in which case you need to make the name **absolutely unique**.

Valid
*****

.. code-block:: html

    <div class="box box-highlighted box-8723"> ... </div>
    <!-- IDs only for navigation jumper through <a href="#page-anchor-team"></a> -->
    <div id="page-anchor-team"></div>
    <!-- IDs only for form elements -->
    <label for="field-id12-firstname">Name</label>
    <input type="text" name="firstname" id="field-id12-firstname">

Invalid
*******

.. code-block:: html

    <div class="box box-highlighted" id="box-8723"> ... </div>
    <!-- IDs only for navigation jumper through <a href="#page-anchor-team"></a> -->
    <div id="team"></div>
    <!-- IDs only for form elements -->
    <label for="firstname">Name</label>
    <input type="text" name="firstname" id="firstname">


Modular
-------

.. important::

    Try to keep the html structure simple and avoid unnecessary elements. It is sometimes easier to use a single div with
    a single class rather than multiple divs with multiple classes.

For example, lets take a look at the following code snippet:

.. code-block:: html

    <div class="addon-blog">
        <h2>My Blog</h2>
        <p>Hello World</p>
    </div>

We don't need to add specific classes to the **h2** as we can control the inner style using ``.addon-blog``. However
more complicated structures such as lead, content, author, meta infos, tags can require their own class names:

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
