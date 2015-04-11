Tips and Tricks
###############

.. note::

    There are several tips & tricks we found over the time that are worth mentioning.


Floating
========

When using ``float: left;``, ``display: block;`` is not required as **every** element which is floated is
automatically a **block** element.


Hidden Attribute
================

With modern HTML5 we can use the html attribute``hidden="hidden"`` which is a **softer** ``display: none;``
and can easy be overwritten using css or JavaScript. This attribute is ideal for hiding elements which should be
later displayed through JavaScript. There is no delay in which the element is hidden which is the case for typical
dynamic execution.


Image Optimization
==================

Images are the number one source of optimisation when it comes to file size.
Optimise images using tools like `CodeKit <https://incident57.com/codekit/>`_ or internal `Gulp <http://gulpjs.com/>`_
command ``gulp images``.
