*************
Configuration
*************

.. note::

    The Boilerplate ships pre-configured and runs out of the box if the
    :doc:`installation` steps are followed properly. However most components
    can be freely configured.


WYSIWYG
=======

The CMS allows for custom style sets within the editor. This ables the user
to choose certain presets or colours. We already added the general Bootstrap
utilities for you. The file can be found at:
``/static/js/addons/ckeditor.wysiwyg.js``.

.. image:: /_static/editor-wysiwyg.png


Custom Icons
============

We added support for custom icon-font generation through Gulp. There are some
configuration steps required if you want to use them:

#. Add your SVG fonts to ``/private/icons``. Gulp gets all SVG files from
   the ``/private/icons/**/*.svg`` pattern and generates the fonts for you.
#. Run ``gulp icons`` to generate the icon-font
#. Uncomment ``// @import iconography;`` from
   ``/private/sass/layout/_all.scss`` to include it in your gulp build

The ``gulp icons`` command will automatically generate the
``/private/sass/layout/_iconography.scss`` file where you find the class
reference and mixins for all icons.

The generated icon-font will use the ``.icon`` css namespace for all
custom icons. We recommend using the ``icon(*)`` mixin instead of
``@extend .icon-*``.
