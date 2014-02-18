Mistakes
========

There are several mistakes I find from time to time over again which I would like to clarify:


Floating
--------

When using ``float: left;``, ``display: block;`` is not required anymore as **every** element which is floated is
automatically a **block** element.


Hidden
------

With modern HTML5 we can use the html attribute``hidden="hidden"`` which is a **softer** ``display: none;``
and can easy be overwritten using css or JavaScript. This attribute is ideal for hiding elements which should be
later displayed using JavaScript, as there is no delay in which the element is hidden as for typicall
dynamic execution.
