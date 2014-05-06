Navigation
==========

Markup
******

.. code-block:: html

    <nav class="mainnav" role="navigation">
        <ul>
            <li class="child first"><a href="#"><span>Item</span></a></li>
            <li class="child"><a href="#"><span>Item</span></a></li>
            <li class="child children ancestor">
                <a href="#"><span>Item</span></a>
                <ul>
                    <li class="child active first"><a href="#"><span>Item</span></a></li>
                    <li class="child last"><a href="#"><span>Item</span></a></li>
                </ul>
            </li>
            <li class="child last"><a href="#"><span>Item</span></a></li>
        </ul>
    </nav>

* **active** is used when the element is selected
* **ancestor** is used when a child element is active.
* **children** is used when an element has chuldren
* **first** and **last** are always appended to the first and last child of the series
* Additionally you can add **nav** to *mainnav* to have a selector for all navigations e.g.: ``class="nav mainnav"``
* The naming should always be: ``mainnav, subnav, metanav, footnav...``


Style
*****

.. code-block:: scss

    .mainnav { position:absolute; right:10px; top:10; z-index:100;
        ul { @extend .list-reset; }
        li { font-size:16px; line-height:20px; }
        a { display:block; text-decoration:none !important; }
        // states
        .active a, .ancestor a { font-weight:bold; }
        .active a { background:#ddd; }
    }
