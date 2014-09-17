Comments
========

Use comments wisely. Ideally every major feature should commented in detail, but time-restraints and budget prevent
this often. However it does not make sense to comment the obvious. Use specific separators to structure code that
it is more readable.

Sections
--------

The long block comment is used to separate sections, for example the mobile/tablet/desktop separation within scss or
base.js.

.. code-block:: javascript

    //######################################################################################################################
    // #NAME#

Use the half version of this to separate larger modules or code blocks so its more readable and parts can be found
quickly:

.. code-block:: javascript

    //###########################################################
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
