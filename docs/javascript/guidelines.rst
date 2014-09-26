Guidelines
==========

* Use **4 space indentation** and **not** tabs
* Use camelCase for variables and **not** underscores or dashes
* Use **dot** annotation ``.`` for javascript file naming
* Use **single-quotes** ``'`` for **all** values
* Use ``base.js`` for global and general functions and avoid adding js files to the root
* Use the frameworks prefix inside the ``addons`` folder
* Use the module and singleton pattern to structure code
* JavaScript should validate JS Lint
* Use full words instead of shorthands like ``number`` instead of ``nr``
* Keep <script> and the following starting enclosure on the same level
* Separate all script tags within a ``{% addtoblock "js" %}``
* Do not add spaces when writing ``if (true) {} else {}`` or ``function helloWorld() {}``
* Always use semicolons and full brackets except shortcuts like ``var i = (true) ? 'yes' : 'no';`` or single lines ``if(index <= 0) index = 0;``
* Never use $ for variable names like ``var $el = $('.el');``
* Ensure that JavaScript widgets don't create disturbances while the DOM is loading
* Please make sure that & has a character reference like "&amp;"

Additionally follow the "Code Conventions for the JavaScript Programming Language": http://javascript.crockford.com/code.html


Example
*******

.. code-block:: javascript

    <script>
    jQuery(document).ready(function () {

        var Cl.MyApp = {
            load: function {
                alert('hello world');
            }
        };

        // load application
        Cl.MyApp.load();

    });
    </script>
