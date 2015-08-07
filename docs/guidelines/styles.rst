******
Styles
******

.. note::

    In addition to the :doc:`general` guidelines, the following sections
    describe stylesheet-specific rules.


Naming
======

.. important::

    - Use **lowercase** in SCSS file names.
    - Use only **dashes** in class/ID names.

.. code-block:: text

    // bad
    Search.scss, marketingSite.scss or theme-dark-blog.scss

    class="blog blogItem blog_item__featured"

.. code-block:: text

    // good
    search.scss, marketing_site.scss or theme_dark_blog.scss

    class="blog blog-item blog-item-featured"


Nesting
=======

.. important::

    - Don't overuse nesting; nest elements to a maximum of **4 indents**.

With great power comes great responsibility (just wanted to throw that in here).
When writing in **Sass** or **Less** laziness can have performance implications.
While nesting is very powerful, we should avoid unnecessary levels or
blocks that can be simplified.

.. code-block:: scss

    // bad
    .nav-main {
        ul {
            @extend list-reset;
            li {
                padding: 5px 10px;
                a {
                    color: red;
                }
            }
        }
    }

.. code-block:: scss

    // good
    .nav-main {
        ul {
            @extend list-reset;
        }
        li {
            padding: 5px 10px;
        }
        a {
            color: red;
        }
    }


Formatting
==========

.. important::

    - Always add a space after the colon ``:``.
    - Only write one CSS property per line.
    - Avoid using selectors such as ``div.container`` or ``ul > li > a`` (i.e. ad-hoc, non-namespaced) to determine
      `specificity <https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity>`_.
    - Write colour values in lowercase and avoid colour names.

.. code-block:: css

    // bad
    article.item {
        color: white;
        padding: 10px; margin-left: 0; margin-top: 0; margin-bottom: 10px;
        background-repeat: no-repeat;
        background-position: left top;
    }

.. code-block:: css

    // good
    .item {
        color: #fff;
        padding: 10px;
        margin: 0 0 10px 0;
        background: no-repeat left top;
    }


Ordering
========

.. important::

    - Use block-style, and group elements below.
    - See ``scss-lint.json`` for a comprehensive ordering example.

#. includes (mixins)
#. extending
#. visibility, position
#. color, font-size, line-height, font-* (font relevant data)
#. width, height, padding, margin (box model relevant date)
#. border, background (box style data)
#. media, print (media queries)
#. :after, :before, :active (pseudo elements)
#. nested elements or parent referencing selectors

.. note::

    Combine attributes such as background-image, background-color,
    background-repeat into a single line ``background:
    #fff url("image.png") no-repeat left top;`` when it makes sense.
    But remember, that a shorthand like ``background`` cannot be overridden
    with just ``background-image``, so use wisely!


Example
-------

.. code-block:: css

    .addon-blog {
        // mixins
        @include border-radius(3px);
        @include box-shadow(0 0 2px #eee);
        // extending
        @extend .list-unstyled;
        // styles
        display: inline;
        position: relative;
        z-index: 1;
        color: white;
        font-size: 16px;
        line-height: 20px;
        width: 80%;
        height: 80%;
        padding: 5px;
        margin: 0 auto;
        border: 2px solid #ccc;
        background: #ddd;
        // desktop and up
        @media (min-width: $screen-md-min) {
            display: block;
        }
        // pseudo elements
        &:active,
        &:hover {
            color: black;
        }
    }
