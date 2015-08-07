###############
Tips and Tricks
###############

.. note::

    There are several tips & tricks we found over the time that are worth
    mentioning.


********
Floating
********

When using ``float: left;``, ``display: block;`` is not required anymore as
**every** element which is floated automatically gets the **block** state.
This does not apply to sub-elements.


****************
Hidden Attribute
****************

With modern HTML5 we can use the ``hidden="hidden"`` attribute which is a
**softer** version of ``display: none;``. This state can easily be overwritten
using CSS or JavaScript. As such the attribute is ideal for hiding elements
which are later displayed through JavaScript to prevent jumping behaviours.
But be aware of the `current support <http://caniuse.com/#search=hidden>`_.


******************
Image Optimisation
******************

Images are the number one source of optimisation when it comes to file size.
Optimise images using tools like `CodeKit <https://incident57.com/codekit/>`_,
`ImageOptim <https://imageoptim.com/>`_ or our internal
`Gulp <http://gulpjs.com/>`_ command: ``gulp images``.
