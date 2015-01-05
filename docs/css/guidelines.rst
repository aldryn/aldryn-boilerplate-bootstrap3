Guidelines
==========

* Use **4 space indentation** and **not** tabs
* Use **underscores** for scss file naming
* Use **double-quotes** ``"`` for all text values
* Use **dashes** to separate class/id names, **not** camelCase or underscore
* Do **not** overuse nesting! If you got only one instance, use one line
* Always add a space after the colon
* Only write one css property per line
* Keep ``sass/layout/`` clean and use the available structure
* Use ``sass/sites/`` for theme based or specific styles
* Define settings within ``sass/settings/``
* Avoid referencing css using their parent like div.container
* Use shorthands for values like ``#ccc`` or ``white``
* Use full words instead of shorthands like ``number`` instead of ``nr``
* Use progressive enhancement whenever possible
* Validation is not required but nice


Style
-----

Use block-style and group elements underneath:

#. includes (compass includes)
#. extending
#. visibility, position
#. color, font-size, line-height, font-* (font relevant data)
#. width, height, padding, margin (box model relevant date)
#. border, background (box style data)
#. media, print (media queries)
#. :after, :before, :active (pseudo elements)

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


Nesting
-------

With great power comes great responsibility (just wanted to throw that in here). When writing in **sass** or **less** we
sometimes forget performance over laziness. While nesting is very powerful, we should avoid unnecessary levels or
blocks that can be achieved simpler. A good example is the following code:

.. code-block:: css

    .nav-main {
        ul {
            li {
                a {
                    color: red;
                }
            }
        }
    }

This can be optimised in various ways. First of all, we don't need the additional nesting. When no other styles are
needed just simply write compact: ``.nav-main ul li a { color: red; }``

Another optimisation is to think about the required declaration levels. Do we really need the *ul li* to declare
our anchor red? Can it just simply be ``.nav-main a { color: red }``?

When we are using multiple styles, we might even consider a structure such as:

.. code-block:: css

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

Which makes our code more structured and readable.
