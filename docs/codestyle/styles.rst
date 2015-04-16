******
Styles
******

General
=======

Formatting, nesting, ordering and everything else is covered by `Guidelines <../guidelines/styles>`_

Selector performance
--------------------

TODO

JS selectors
------------

We use ``js-`` prefixed selectors for referencing DOM Nodes from javascript. That means that these classes have a pure
functional pirpose and styles should **never** be applied to them. Same type of widget could be easily represented by
completely different sets of markup.

Sass
====

Sass or SCSS
------------

That one is a no-brainer. We use SCSS flavor because it is closer to CSS and easier to pick up for everyone.
It also resolves subtle issues with indentation.

Nesting
-------

Optimal nesting level is 2. You can go up to 4 levels (scss-lint rule), but try not to.
Overused nesting usually means that something is wrong with the code.

Formatting
----------

TODO

Extends
-------

In general, try to avoid extend unless you know exactly what you are doing.
Only use @extend when the rulesets that you are trying to DRY out are inherently and thematically related.

    Do not force relationships that do not exist: to do so will create unusual groupings in your project, as well as
    negatively impacting the source order of your code.

    http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/


Mixins
------

TODO


Compass vs LibSass
==================

At the moment compass. In plans - dropping compass and implementing LibSass.

Autoprefixer
------------

TODO
