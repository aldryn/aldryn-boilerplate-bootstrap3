Styles
======

.. note::

    In addition to the :doc:`general` guidelines, the following sections describe stylesheet specific rules.


Naming
------

.. admonition:: Files
    :class: `important`

    - Use **underscores** for scss file naming
    - Use only **dashes** to separate class/ID names

Valid
*****

.. code-block:: text

    search.scss, marketing_site.scss or theme_dark_blog.scss

.. code-block:: html

    class="blog blog-item blog-item-featured"

Invalid
*******

.. code-block:: text

    Search.scss, marketingSite.scss or theme-dark-blog.scss

.. code-block:: html

    class="blog blogItem blog_item__featured"


Nesting
-------

.. admonition:: Tree
    :class: `important`

    - Don't overuse nesting, nest elements to a max of **4 indends**

With great power comes great responsibility (just wanted to throw that in here). When writing in **sass** or **less** we
sometimes forget performance over laziness. While nesting is very powerful, we should avoid unnecessary levels or
blocks that can be achieved simpler. A good example is the following code:

Valid
*****

.. code-block:: scss

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

Invalid
*******

.. code-block:: scss

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


Formatting
----------

.. admonition:: Code
    :class: `important`

    - Always add a space after the colon
    - Only write one css property per line
    - Avoid explicitivity such as ``div.container`` or ``ul > li > a``
    - Write color values in lowercase and avoid color names

Valid
*****

.. code-block:: css

    .item {
        color: #fff;
        padding: 10px;
        margin: 0 0 10px 0;
        background: no-repeat left top;
    }

Invalid
*******

.. code-block:: css

    article.item {
        color: white;
        padding: 10px; margin-left: 0; margin-top: 0; margin-bottom: 10px;
        background-repeat: no-repeat;
        background-position: left top;
    }


Ordering
--------

.. admonition:: Tree
    :class: `important`

    - Use block-style and group elements underneath

#. includes (compass includes)
#. extending
#. visibility, position
#. color, font-size, line-height, font-* (font relevant data)
#. width, height, padding, margin (box model relevant date)
#. border, background (box style data)
#. media, print (media queries)
#. :after, :before, :active (pseudo elements)
#. nested elements or parent referencing selectors

Combine attributes such as background-image, background-color, background-repeat into
``background: #fff url("image.png") no-repeat left top;``.

Also ensure combined css selectors are always on a new line.

Example
*******

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
