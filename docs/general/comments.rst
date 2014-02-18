Comments
========

Use comments wisely. Ideally every major feature should commented in detail, but time-restraints and budget prevent
this often. However it does not make sense to comment the obvious. Use specific separators to structure code that
it is more readable. The longblock comment is used to separate blocks, for example the mobile/tablet/desktop separation
within scss or base.js.

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