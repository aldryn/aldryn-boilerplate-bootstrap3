Comments
========

.. note::

    If peppering your code with lots of comments is good, then having zillions of comments in your code must be great,
    right? Not quite. Comments in code are a double edged sword, use them to describe what's being done.


It doesn't make sense to comment every step you do in your program. Comments should discuss why something is done,
its purpose and its goal. The code already shows how it is done, so commenting on this is redundant.

Section Comments
----------------

The first separation style is *section comment*. This uses the full 120 width span ideally placed to separate large
chunks of logic::

    // #####################################################################################################################
    // #NAME#

The second available style separates smaller code blocks using 60 only lines::

    // #########################################################
    // #NAME#


Inline Comments
---------------

When using comments inline, make use of the appropriate formats:

- ``{# ... #}`` or ``{% comment %} ... {% endcomment %}`` for Django templates and **never** ``<!-- ... -->``
- ``// ...`` and ``/* ... */`` for SASS and JavaScript

Notes
*****

We also use several comment helpers which, if you configured them in your editor, add additional highlighting to your
code:

| **FIXME:**
| to annotate problems with the code
|

.. code-block:: javascript

    function Calculator() {
        // FIXME: shouldn't use a global here
        total = 0;
        ...
    }


| **TODO:**
| to annotate solutions to problems with the code
|

.. code-block:: javascript

    function Calculator() {
        // TODO: total should be configurable by an options param
        this.total = 0;
        ...
    }

| **INFO:**
| provides additional help if something might be unclear or requires additional description
|

.. code-block:: javascript

    // INFO: We had to loop twice through the element as the provided data is nested multiple times

| **DOCS:**
| provides a simple docs link
|

.. code-block:: javascript

    // DOCS: https://django-cms.readthedocs.org/en/latest/


Formatting
----------

.. admonition:: Comments
    :class: `important`

    - Add proper whitespaces
    - In general use lowercases except for the *Notes*

Valid
*****

.. code-block:: javascript

    // TODO: this needs additional review
    // square root of n with Newton-Raphson approximation
    /**
     * Contains various helpers, feel free to extend and adapt
     *
     * @class Utils
     * @namespace Cl
     */

Invalid
*******

.. code-block:: javascript

    //TODO: THIS NEEDS ADDITIONAL REVIEW
    //
    // square root of n with Newton-Raphson approximation
    /**
     * Contains various helpers, feel free to extend and adapt
     */


YUIDoc
------

In 3.3.0 we introduced `YUIDoc <http://yui.github.io/yuidoc/>`_ which uses syntax similar to JSDoc in order to further
improve JavaScript documentation.
We are encouraging using this style within your code as shown in ``/static/js/addons/cl.utils.js``.
