Comments
========

.. note::

    If peppering your code with lots of comments is good, then having zillions of comments in your code must be great,
    right? Not quite. Use comments where it helps reading your code.


Section Comments
----------------

One comment separation style are *section comments*. There we separate large chunks of codes with comment separators.
You can use the full comment separation which spans 120 lines:

.. code-block:: javascript

    // #####################################################################################################################
    // #NAME#

Use the half version of this to separate larger modules or code blocks so its more readable and parts can be found
quickly:

.. code-block:: javascript

    // #########################################################
    // #NAME#

The large comment block should be exactly 120 characters long.

Otherwise use normal inline // comments or block /* comments */ whenever it is more logical.

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
