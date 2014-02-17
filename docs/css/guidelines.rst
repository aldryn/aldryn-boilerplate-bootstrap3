Guidelines
==========

* Use **tabs** and **not** spaces
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


Example
-------

.. code-block:: css

    .addon-blog { color:white; font-size:16px; line-height:20px;
        width:80%; height:80%; padding:5px; margin:0 auto;
        border:2px solid #ccc; border-top:none; background:#ddd;
        @include border-radius(3px);
        @include box-shadow(0 0 2px #eee);
    }

    .blog-headline { color:#999; font-size:120%; line-height:120%; }
