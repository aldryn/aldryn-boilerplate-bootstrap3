*******
General
*******

.. note::
    There are global guidelines which affect every single language, file or
    folder.


Standards
=========

.. important::

    - **Validate** your code through the `W3C validators <http://validator.w3.org/>`_.
    - There is something called `Accessibility <http://www.w3.org/WAI/WCAG20/quickref/>`_.
    - Don't forget about **HiDPI**, **Retina** and **High Resolutions** displays.
    - Proper fallbacks should be available if a connection is slow or features are disabled.
    - Progressive enhancement, graceful degradation and responsive design are buzzwords you care about.
    - Develop with modularity and extensibility in mind.
    - Documentation is your friend.


Spacing
=======

.. important::

    - Use **4 spaces** for indentation.

Not 2, 3 or 8 – no tabs – if you are able to do 3 :sup:`3/4`, that's good enough


Line Length
===========

.. important::

    - Don't breach **120 characters** per line.

*Not even for HTML.* We even encourage you to use 80 characters per line. Yes,
screens have got much bigger over the last few years, but your brain hasn't.
Better to use screen estate for splits, anyway.


Naming
======

.. important::

    - **lowercase**, **camelCase** or **hyphened separation** are all good; use
      **no special characters** except for underscore ``_``.
    - Use dashes ``-`` for file naming, unless expressly counterindicated (e.g. in HTML template names).
    - Always use full words instead of abbreviations: ``number`` is better than ``nr``.
    - `BEM <https://bem.info/>`_ is a nice methodology to be aware of.

“There are only two hard things in Computer Science:
    cache invalidation and naming things"
    – Phil Karlton


Quotes
======

.. important::

    - We always use **double** ``"."`` quotes for everything,
      *except in JavaScript*, where we use **single** ``'.'`` quotes.
