******
Styles
******

General
=======

Formatting, nesting, ordering and everything else is covered by `Guidelines <../guidelines/styles>`_

Main problem with CSS
---------------------

Describe

Selector performance
--------------------

TODO

JS selectors
------------

We use ``js-`` prefixed selectors for referencing DOM Nodes from javascript. That means that these classes have a pure
functional pirpose and styles should **never** be applied to them. Same type of widget could be easily represented by
completely different sets of markup.

Magic numbers
-------------

TODO

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


Color manipulation
------------------

When using alpha transparent colors keep in mind that ``rgba`` supports passing colors, so you can do things like this:

.. code-block:: scss

    // bad
    color: rgba(0, 0, 0, 0.85);

    // good
    color: rgba(black, 0.85);
    color: rgba(#000, 0.85);
    color: rgba($color, 0.85);

Compass vs LibSass
==================

At the moment compass. In plans - dropping compass and implementing LibSass.

Autoprefixer
------------

For generating vendor prefixes one should use Autoprefixer instead of relying on mixins. That way we reduce sass
compilation time and ensure that we have only prefixes that we actually need. As a good side effect we will use actual
standard CSS syntax.

Will be implemented with LibSass, but can be used with ``autoprefixer-rails`` gem.

Bootstrap
=========

When using ``settings/_bootstrap.scss`` make sure that you have all the variables overwritten in the file, because
overriding only some of them can lead to subtle bugs like `this <https://gist.github.com/vxsx/598a1312cd036fa94095>`_:

.. code-block:: scss

    // this is what happens in the bootstrap/_variables.scss
    $line-height-computed: 20px !default;
    $padding-base-vertical: 6px !default;

    // and this is a computed property from bootstrap, 34px by default
    $input-height-base:  ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;

    // now what we want to do is to override line-height-computed in our settings file
    $line-height-computed: 23px;

Now we would expect that ``$input-height-base`` will be 37px, but it will be still 34px because computed properties are
already calculated and won't be changed. Since bootstrap components dimensions are all interconnected to these computed
variables we should always have the full settings file. Order matters too.


Media queries
-------------

In general when using media queries with bootstrap variables, use appropriate values for appropriate type of a query.

.. code-block:: scss

    // bad
    @media (min-width: $screen-sm-max) {
        ...
    }

    @media (max-width: $screen-sm-min) {
        ...
    }

    // good
    @media (min-width: $screen-md-min) {
        ...
    }

    @media (max-width: $screen-xs-max) {
        ...
    }

These values differ only by 1 pixel, but it's a very important one.
