*******
General
*******

.. note::

    Let's cover the core structure of this Boilerplate consisting of the
    main folders:

.. code-block:: text

    docs/
    private/
    static/
    templates/
    tests/

The starting point for each entry is always named "base"``", with the
appropriate file extension. For HTML ``base.html``, Sass ``base.scss``,
JavaScript ``base.js`` – you get the idea. This way you always know which file
you should look after **first**. Lets take a closer look at each individual
folder:


docs/
=====

The full documentation is stored within ``/docs`` and is compiled into
``/docs/_build`` when running ``make run``. The documentation is automatically
pushed to `Read the Docs <https://aldryn-boilerplate-bootstrap3.readthedocs.org/en/latest/>`_
once something is committed to the *master* branch. More information on how to
contribute to the documentation can be found within the :doc:`/contribution/index`
section.


private/
========

.. important::
    This folder is **not published**, nor touched by preprocessing or other
    build libraries. Anything in here should be and remain safe.

This folder is intended for storing preprocessing library code (Sass, Less,
Coffee, HAML, etc). Simply create a folder within ``/private`` with appropriate
name: ``/sass``, ``/less`` or ``/haml`` and so on as required. Always place
required configuration files within the ``/private`` root. 

.. code-block:: text

    private/
    ├─ sass/
    │  └─ base.sass
    └─ config.rb

.. hint::
   We are using ``/sass`` as folder name and not ``/scss`` as the language
   itself is called `Sass <http://sass-lang.com/>`_. Always use the full
   written acronym.


static/
=======

.. important::
    This folder is publicly available, all files can be accessed via
    ``http://yourwebserver/static/``.

The default folder layout looks as follows:

.. code-block:: text

    static/
    ├─ css/
    ├─ fonts/
    ├─ img/
    ├─ js/
    ├─ swf/
    └─ ...

If folders are not required, just simply remove them. When a folder reaches a
certain file count, make use of grouping and create additional sub-directories
such as ``/static/img/icons`` or ``/static/js/addons/jquery``.


templates/
==========

All django templates should be allocated within the ``/templates`` folder.
This also applies for apps or inclusion files. When using
`Haml <http://haml.info/>`_, set your configuration so templates get compiled
into ``/templates``.

The default *index.html* is always ``/templates/base.html``.

Global inclusion files are placed within ``/templates/includes``.
Addons normally have their own */includes* folder so they are not overcrowding
the structure.


tests/
======

The test suite is described in more depth within the :doc:`../testing/index` section.
