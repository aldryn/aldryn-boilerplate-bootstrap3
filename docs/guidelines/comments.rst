********
Comments
********

.. note::

    If peppering your code with lots of comments is good, then having zillions of comments in your code must be great,
    right? Not quite. It doesn't make sense to comment every step your code makes, or to comment on things that don't
    need to be explained.

Comments in code should describe:

- **what** is being done
- **why** it's being done

They do not need to describe:

- **how** it is being done (the code already shows this)
- what you are thinking about


Section Comments
================

The first separation style is *section comment*. This uses the full 120 width span ideally placed to separate large
chunks of logic or a nice addition to the top of a file::

    // #####################################################################################################################
    // #NAME#

The second available style separates smaller code blocks using 60 only lines::

    // #########################################################
    // #NAME#


Inline Comments
===============

When using comments inline, make use of the appropriate formats:

- ``{# ... #}`` or ``{% comment %} ... {% endcomment %}`` for Django templates and **never** ``<!-- ... -->``
- ``// ...`` and ``/* ... */`` for Sass and JavaScript


Notes
-----

We also use several comment helpers which, if configured in your editor, add additional highlighting to your code:

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

| **DOCS:**
| provides a simple docs link
|

.. code-block:: javascript

    // DOCS: https://django-cms.readthedocs.org/en/latest/


Formatting
==========

.. admonition:: Comments
    :class: `important`

    - Add proper whitespace.
    - In general use lowercases except for the *Notes*.

.. code-block:: javascript

    bad
    //TODO: THIS NEEDS ADDITIONAL REVIEW
    //
    // square root of n with Newton-Raphson approximation
    /**
     * Contains various helpers, feel free to extend and adapt
     */

.. code-block:: javascript

    good
    // TODO: this needs additional review
    // square root of n with Newton-Raphson approximation
    /**
     * Contains various helpers, feel free to extend and adapt
     *
     * @class Utils
     * @namespace Cl
     */


YUIDoc
======

In 3.3.0 we introduced `YUIDoc <http://yui.github.io/yuidoc/>`_ which uses syntax similar to JSDoc in order to further
improve JavaScript documentation. We encourage using this style within your code, as shown in
``/static/js/addons/cl.utils.js``.
