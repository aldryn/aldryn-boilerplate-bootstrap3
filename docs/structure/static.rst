******
Static
******

.. note::

    As ``/static`` is publicly accessible, avoid adding sensitive files into
    this directory.

Keep the **root path** of ``/static`` simple and clean. Only favicons should be
placed there. They ultimately get picked up by the ``base_root.html`` template.


css/
====

CSS gets automatically compiled via ``/private/config.rb`` into this folder.
You can add additional files such as ``*.htc`` if required. But **always
add CSS files through Sass**.


fonts/
======

All fonts should be placed here including icon fonts. You can create
sub-directories to create a better overview. This folder might not be required
if you are implementing fonts via services such as
`Google Fonts <http://www.google.com/fonts>`_ or `fonts.com <http://fonts.com>`_.


img/
====

Demo images (which might be later integrated as media files via Filer)
should be placed within ``/static/img/dummy``. This folder will be ignored by
the ``gulp preprocess`` and ``gulp images`` commands.

Make use of grouping and create additional sub-directories such as
``/static/img/icons`` or ``/static/img/visuals`` if the file count seems to
be excessive.


js/
===

The same structure approach as described within :doc:`private` is applied to
the JS directory. ``/layout``, ``/settings`` and ``/sites`` are not required,
but may be used. jQuery is an essential part and should be
treated the same as the Bootstrap component.


swf/
====

Old school, currently only required to use ``/static/js/libs/swfobject.min.js``.
