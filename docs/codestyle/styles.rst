******
Styles
******


General
=======

Formatting, nesting, ordering and everything else is covered by
`Guidelines <../guidelines/styles>`_


Main problem with CSS
---------------------

    There are two types of problems in CSS: cosmetic problems and architectural
    problems. Cosmetic problems—issues like vertical centering or equal-height
    columns—usually engender the most vocal complaints, but they’re almost
    never showstoppers. They’re annoying, sure, but they don’t break the build.

    Philip Walton `Side Effects in CSS <http://philipwalton.com/articles/side-effects-in-css/>`_

Since CSS is global, every rule you write or override has the potential to
break completely unrelated things. With that in mind, try to avoid selectors
that are too unspecific (e.g.
`type selectors <https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors>`_
or overly specific selectors, like ``.nav > ul > li > a``. That selector
is going to be extremely painful to extend and override if there's going to be
a "special" list item for example. That also brings us to


Selector performance
--------------------

It is always said that css selectors performance is not that important and
there are no "easy-to-follow" rules for fixing it. But just to reiterate, main points:

- If your project is sufficiently big and complex or really dynamic, css
  selector performance may play a major role in the perceived rendering performance.

- Selectors are interpreted by the browser from right to left, meaning
  ``.my-class > *`` will select all the elements on the page all the time and
  check if their immediate parent has a class ``my-class``. If there would be
  no ``>`` it would traverse the tree all the way up for every element, which
  is not very good. It is true that browsers do optimize things like this, but
  you should always check for yourself.


JS selectors
------------

We use ``js-`` prefixed selectors for referencing DOM Nodes from javascript.
That means that these classes have a pure functional purpose and styles should
**never** be applied to them. Same type of widget could be easily represented
by completely different sets of markup.


Magic numbers
-------------

Tend not to use magic numbers in CSS. Let's say you want to position an element
in a specific place. Try to be agnostic of the environment and don't use values
that are too specific.

.. code-block:: scss

    .nav {
        height: 30px;
    }

    // bad
    .dropdown {
        // it works, but imagine we are going to change
        // the height of the nav. we'll need to go all over the css and change
        // the value now
        top: 35px;
    }

    // good
    .dropdown {
        top: 100%;
        margin-top: 5px;
    }

Another example of magic numbers could be computed values. Let's say you have a
component that is created on top of existing component, like a bootstrap styled
select.

.. code-block:: scss

    // bad
    .custom-select {
        height: 38px;
        padding: 14px 17px;
    }

    // much better
    .custom-select {
        height: $input-height-base - 2px;
        padding: ($padding-base-vertical - 1px) ($padding-base-horizontal - 1px);
    }


`Avoid magic numbers like the plague. <http://csswizardry.com/2012/11/code-smells-in-css/>`_.


Sass
====


Sass or SCSS
------------

That one is a no-brainer. We use SCSS flavor because it is closer to CSS and
easier to pick up for everyone. It also resolves subtle issues with indentation.


Nesting
-------

Optimal nesting level is 2. You can go up to 4 levels (scss-lint rule), but try
not to. Overused nesting usually means that something is wrong with the code.


Extends
-------

In general, try to avoid extend unless you know exactly what you are doing.
Only use @extend when the rulesets that you are trying to DRY out are inherently
and thematically related.

    Do not force relationships that do not exist: to do so will create unusual
    groupings in your project, as well as negatively impacting the source order
    of your code.

    http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/


Color manipulation
------------------

When using alpha transparent colors keep in mind that ``rgba`` supports passing
colors, so you can do things like this:

.. code-block:: scss

    // bad
    color: rgba(0, 0, 0, 0.85);

    // good
    color: rgba(black, 0.85);
    color: rgba(#000, 0.85);
    color: rgba($color, 0.85);


Autoprefixer
------------

For generating vendor prefixes one should use Autoprefixer instead of relying
on mixins. That way we reduce sass compilation time and ensure that we have only
prefixes that we actually need. As a good side effect we will use actual
standard CSS syntax.


Bootstrap
=========

When using ``settings/_bootstrap.scss`` make sure that you have all the
variables overwritten in the file, because overriding only some of them can
lead to subtle bugs like `this <https://gist.github.com/vxsx/598a1312cd036fa94095>`_:

.. code-block:: scss

    // this is what happens in the bootstrap/_variables.scss
    $line-height-computed: 20px !default;
    $padding-base-vertical: 6px !default;

    // and this is a computed property from bootstrap, 34px by default
    $input-height-base:  ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;

    // now what we want to do is to override line-height-computed in our settings file
    $line-height-computed: 23px;

Now we would expect that ``$input-height-base`` will be 37px, but it will be
still 34px because computed properties are already calculated and won't
be changed. Since bootstrap components dimensions are all interconnected
to these computed variables we should always have the full settings file.
Order matters too.


Media queries
-------------

In general when using media queries with bootstrap variables, use appropriate
values for appropriate type of a query.

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


Open for discussion
-------------------

- Screenshot regression testing
- autoprefixer implementation
