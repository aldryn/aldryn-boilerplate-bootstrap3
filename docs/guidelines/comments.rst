Comments
========

.. note::

    If peppering your code with lots of comments is good, then having zillions of comments in your code must be great,
    right? Not quite. Use comments where it helps reading your code.


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

- ``{# ... #}`` or ``{% comment %} ... {% endcomment %}`` for HTML and **never** ``<!-- ... -->``
- ``// ...`` and ``/* ... */`` for SASS and JavaScript







Notes
-----

We also support three types of comments within the code itself:

| **TODO:**
| indicates that something is still missing and needs to be done
|

.. code-block:: javascript

    // TODO: We still need to add keyboard navigation

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

HTML
----

Use the django or jinja template comments rather than the native html ones in order to hide developers notes
from the live production website when the HTML gets shipped.


Always use a spacer after a comment
