Guidelines
==========

* Use **tabs** and **not** spaces
* Use camelCase for variables and **not** underscores or dashes
* Use **dott** annotation ``.`` for javascript file naming
* Use **single-quotes** ``'`` for **all** values
* Use ``base.js`` for global and general functions and avoid adding js files to the root
* Use the frameworks prefix inside the ``plugins`` folder
* Use the singleton pattern to structure code
* JavaScript should validate JS Lint
* Whenever possible, use full words instead of shorthands like ``count`` instead of cnt
* Keep <script> and the following starting enclosure on the same level
* Separate all script tags within a ``{% addtoblock "js" %}``
* Do not add spaces when writing ``if(true) {} else {}`` or ``function helloWorld() {}``
* Always use semicolons and full brackets except shortcuts like ``var i = (true) ? 'yes' : 'no';`` or single lines ``if(index <= 0) index = 0;``
* Never use $ for variable names like ``var $el = $('.el');``
* Ensure that JavaScript widgets don't create distrubances while the dom is loading


Example
-------

.. code-block:: javascript

