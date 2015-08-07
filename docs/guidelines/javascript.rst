**********
JavaScript
**********

.. note::

    In addition to the :doc:`general` guidelines, the following sections
    describe JavaScript specific rules.
    `Code Conventions for the JavaScript Programming Language <http://javascript.crockford.com/code.html>`_
    should be your Bible.


Naming
======

.. important::

    - Use **dot** annotation ``test.base.js`` for JavaScript file naming.
    - Use a library's prefix, such as ``cl.xplorer.js`` or ``jquery.tablesorter.js``, for file naming.
    - Name ``variablesLikeThis``, ``ClassesLikeThis``, ``CONSTANTS_LIKE_THIS`` and ``events-like-this``.
    - Use the ``js-`` prefix when working with JS-related selectors and do not add styling to it.
    - Never use comma separation for variable declarations like ``var a, b, c;``.
    - Never use $ for variable names such as ``var $el = $('.el');``.
    - We are using the ``Cl.`` singleton for all custom JavaScript code.

When using jQuery to refer to a DOM instance, always use the ``js-``
prefix to separate styles from JavaScript functionality. For example:
``<div class="addon addon-gallery js-addon-gallery"></div>``.

In this example, *addon* and *addon-gallery* have styles attached to them,
*js-plugin-gallery* refers to the JavaScript functionality attached to the DOM
element.

Even when removing the JS class (or just waiting for JavaScript to kick in),
the addon should still look good.


.. code-block:: javascript

    // bad
    CL.Utils.js, jquery_tooltip.js, testWebsiteCreateNew.js

    var $jquery, current_state;
    var test-website-create-new;

.. code-block:: javascript

    // good
    cl.utils.js, jquery.tooltip.js or test.website.create.new.js

    var jquery;
    var currentState;
    var nextIndexValue;


Formatting
==========

.. important::

    - Always declare variables on top of the functions and not in between.
    - Always use `semicolons <https://www.youtube.com/watch?v=M94ii6MVilw>`_
      and full brackets, except in shorthand like
      ``var i = (true) ? 'yes' : 'no';``.
    - Use proper spaces for ``if (true) {} else {}`` or ``function () {}``.

.. code-block:: javascript

    // bad
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

.. code-block:: javascript

    // good
    function (container) {
        var container = $(container);
        if (container.length) {
            // do something
        } else {
            // so something else
        }
    }


Implementation
==============

.. important::

    - Keep ``<script>`` and the following starting closure on the same level.
    - Separate all script tags using ``{% addtoblock "js" %}{% endaddtoblock %}``.
    - Never use JavaScript attributes on HTML elements such as ``onclick=""`` or ``onload=""``.
    - Don't add inline JavaScript within HTML, implement JavaScript through **files only**. Instantiate functionality
      from within the JavaScript file instead.

.. code-block:: django

    // bad
    <div class="dashboard" id="dashboard"> ... </div>
    {% addtoblock "js" %}
    <script src="{% static "js/addons/cl.dashboard.js" %}"></script>
    {% endaddtoblock %}
    <!-- javascript gets initialised inside the template -->
    {% addtoblock "js" %}
    <script>
    jQuery(document).ready(function () {

        Cl.dashboard.init('#dashboard');

    });
    </script>
    {% endaddtoblock "js" %}

.. code-block:: django

    // good
    <div class="dashboard js-dashboard" data-dashboard="..."> ... </div>
    <!-- javascript gets initialised within the file -->
    {% addtoblock "js" %}<script src="{% static "js/addons/cl.dashboard.js" %}"></script>{% endaddtoblock %}


Patterns
========

.. important::

    - Use the
      `singleton pattern <http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript>`_
      to avoid globals.
    - Use the `module pattern <http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript>`_
      to structure code.
    - Avoid the `functional pattern <http://1closure.com/2012/06/object-oriented-javascript-the-functional-pattern/>`_

