Guidelines
==========

* Use **4 space intendation** and **not** tabs
* Use **underscores** for scss file naming
* Use **double-quotes** ``"`` for all text values
* Use **dashes** to separate class/id names, **not** camelCase or underscore
* Do **not** overuse nesting! If you got only one instance, use one line
* Keep ``sass/layout/`` clean and use the available structure
* Use ``sass/sites/`` for theme based or specific styles
* Define settings within ``sass/settings/``
* Avoid referencing css using their parent like div.container
* Use shorthands for values like ``#ccc`` or ``white``
* Use full words instead of shorthands like ``number`` and not ``nr``
* Use progressive enhancement whenever possible
* Validation is not required


Style
-----

Use the single-line style instad of block-style and group:

#. color, font-size, line-height, font-* (font relevant data)
#. width, height, padding, margin (box model relevant date)
#. border, background (box style data)
#. includes (compass includes)

Combine attributes such as background-image, background-color, background-repeat into
``background: #fff url("image.png") no-repeat left top;``.

Example
*******

.. code-block:: css

    .addon-blog { color: white; font-size: 16px; line-height: 20px;
        width: 80%; height: 80%; padding: 5px; margin: 0 auto;
        border: 2px solid #ccc; border-top: none; background: #ddd;
        @include border-radius(3px);
        @include box-shadow(0 0 2px #eee);
    }

    .blog-headline { color: #999; font-size: 120%; line-height: 120%; }


Nesting
-------

With great power comes great responsibility (just wanted to throw that in here). When writing in **sass** or **less** we
sometimes forget performance over lazyness. While nesting is very powerfull, we should avoid unnecessary levels or
blocks that can be achieved simpler. A good example is the following code:

.. code-block:: css

    .mainnav {
        ul {
            li {
                a { color: red; }
            }
        }
    }

This can be optimized in various ways. First of all, we dont need the additional nesting. When no other styles are
needed just simply write compact: ``.mainnav ul li a { color: red; }``

Another optimization is to think about the required decleration levels. Do we really need the *ul li* to declare
our anchor red? Can it just simply be ``.mainnav a { color: red }``?

When we are using multiple styles, we might even consider a structure such as:

.. code-block:: css

    .mainnav {
        ul { @extend list-reset; }
        li { padding: 5px 10px; }
        a { color: red; }
    }

Which makes our code more structured and readable.
