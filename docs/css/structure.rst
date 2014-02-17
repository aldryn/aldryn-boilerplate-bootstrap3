Structure
=========

Every folder within ``private/sass/`` includes a file called **_all.scss**. This file is included within
``private/sass/base.scss`` which gets compiled into ``static/css/base.css``. Update the all file to include
additional modules, do not include files directly within *base.scss*.

The SCSS file is structured into 3 separate section for **mobile**, **tablet** and **desktop**. This allows for an
easy responsive approach by maintaining the code within a single file.

.. HINT::
   The first line ``// @media all`` is commented in order to use the **sass** ``@extend`` functionality which is
   currently not available within *@media* rules.


addons/
-------

Separate modules which are plug-n-play able and add them into this folder. Traditionally these are django addons
which can be installed such as **aldryn-blog**, **aldryn-news** or **aldryn-shop**.


layout/
-------

Layout specific styles such as header, footer or general forms should be added here. Also specific definitions for
print, retina or mobile only styles that are used globally should be defined here.

In addition you can set fonts, icons and custom mixins.


libs/
-----

As foundation, we use normalize.css as many other boilerplates are using in its default state.

We are using the `foundation grid <http://foundation.zurb.com/grid.html>`_ with **24 columns** and a max-width of
**960px** which offers the most flexible way of designing and a readable code.

We include various helper classes inspired by *bootstrap* within ``private/sass/libs/_bootstrap.scss``.
It makes sense to read the code as most elements are setup using the settings within
``private/sass/settings/default.scss``.

These files should generally **not** be overwritten.


settings/
---------

Control over color, sizes and other settings are found here. These settings have mostly impact on the available
libraries. You can add additional settings file if required. For example ``private/sass/settings/_shop.scss``.


sites/
------

If you are working on a theme-based setup or have styles which do not fit into the folders described above, this
is the appropriate place to add them.

This folder can be freely structured. ``_custom.scss`` can be used for quick fixes or hacks.
