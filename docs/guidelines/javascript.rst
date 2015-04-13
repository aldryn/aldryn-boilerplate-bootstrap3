JavaScript
==========

.. note::

    In addition to the :doc:`general` guidelines, the following sections describe JavaScript specific rules.
    `Code Conventions for the JavaScript Programming Language <http://javascript.crockford.com/code.html>`_ should be
    your Bible.


Naming
------

.. admonition:: Files & Variables
    :class: `important`

    - Use **dot** annotation ``test.base.js`` for javascript file naming
    - Use the libraries prefix such as ``cl.xplorer.js`` or ``jquery.tablesorter.js`` for file naming
    - Name ``variablesLikeThis``, ``ClassesLikeThis``, ``CONSTANTS_LIKE_THIS`` and `events-like-this`.
    - Use the ``js-`` prefix when working with JS related selectors and do not add stylings to it
    - Never use comma separation for variable declerations like ``var a, b, c;``
    - Never use $ for variable names like ``var $el = $('.el');``
    - We are using the ``Cl.`` singleton for all custom JavaScript code

When using jQuery to refer to a DOM instance, always use the ``js-`` prefix to separate
styles from JavaScript functionality. For example: ``<div class="addon addon-gallery js-addon-gallery"></div>``.

In this example, *addon* and *addon-gallery* define styles according to BEM principles and *js-plugin-gallery*
refers to the JavaScript functionality attached to the DOM element.

Even when removing the js class (or just waiting for javascript to kick in), the addon should still look ok.

Valid
*****

.. code-block:: text

    cl.utils.js, jquery.tooltip.js or test.website.create.new.js

.. code-block:: javascript

    var jquery;
    var currentState;
    var nextIndexValue;

Invalid
*******

.. code-block:: text

    CL.Utils.js, jquery_tooltip.js, testWebsiteCreateNew.js

.. code-block:: javascript

    var $jquery, current_state;
    var test-website-create-new;


Formatting
----------

.. admonition:: Code
    :class: `important`

    - Always declare variables on top of the functions and not in-between
    - Always use semicolons and full brackets except shorthands like
      ``var i = (true) ? 'yes' : 'no';``
    - Use proper spaces for ``if (true) {} else {}`` or ``function () {}``

Valid
*****

.. code-block:: javascript

    function (container) {
        var container = $(container);
        if (container.length) {
            // do something
        } else {
            // so something else
        }
    }

Invalid
*******

.. code-block:: javascript

    function(cont){
        var c = $(cont);
        if(c.length) {
            // do something
        }
        else
        {
            // so something else
        }
    }


Implementation
--------------

.. admonition:: Code
    :class: `important`

    - Keep <script> and the following starting enclosure on the same level
    - Separate all script tags within a ``{% addtoblock "js" %}``
    - Do not use inline JS within HTML attributes such as ``onclick=""`` or ``onload=""``
    - Do not use inline JS within HTML, try to implement JavaScript files only
    - Instantiate JS functionality from within the JavaScript file

Valid
*****

.. code-block:: django

    <div class="dashboard js-dashboard" data-dashboard="..."> ... </div>
    {% addtoblock "js" %}<script src="{% static "js/addons/cl.dashboard.js" %}"></script>{% endaddtoblock %}
    <!-- javascript gets initialized within the file -->

Invalid
*******

.. code-block:: django

    <div class="dashboard" id="dashboard"> ... </div>
    {% addtoblock "js" %}
    <script src="{% static "js/addons/cl.dashboard.js" %}"></script>
    {% endaddtoblock %}
    {% addtoblock "js" %}
    <script>
    jQuery(document).ready(function () {

        Cl.dashboard.init('#dashboard');

    });
    </script>
    {% endaddtoblock "js" %}


Patterns
--------

.. admonition:: Code
    :class: `important`

    - Use the `singleton pattern
      <http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript>`_ to avoid globals
    - Use the `module pattern
      <http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript>`_ to structure code
    - Avoid the functional pattern

