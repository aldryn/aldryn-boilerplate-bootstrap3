General
=======

.. note::

    Let's cover the core structure of this boilerplate consisting of the 4 main folders.

.. code-block:: text

    docs/
    private/
    static/
    templates/

The starting point for each entry is always called ``base.ext``. For HTML ``base.html``, SASS ``base.scss``, JavaScript
``base.js`` – you get the drift. In this case you always know which file you should look after **first**.
Lets take a closer look at each individual folder:


docs/
-----

The full documentation is stored within ``/docs`` and gets compiled into ``/docs/_build`` when running ``make run``.
The documentation gets automatically compiled to `ReadTheDocs
<https://aldryn-boilerplate-bootstrap3.readthedocs.org/en/latest/>`_ once a push to *master* is commenced.
More information on how to contribute to the documentation can be found within the :doc:`../contribution/index` section.


private/
--------

.. important::
    This folder is publicly **not accessible**, all source files are stored safely.

This folder is intended for storing preprocessing libraries such as **sass**, **less**, **coffee** or **haml**.
Simply create a folder within ``/private`` with the librarie's name such as ``sass``, ``less`` or ``haml``.
Always place required configuration files within the ``/private`` root. Let's take a look at the sass example using
the compass configuration file:

.. code-block:: text

    private/
    ├─ sass/
    │  └─ base.sass
    └─ config.rb

.. hint::
   The ``config.rb`` is taken from `Compass <http://compass-style.org/>`_. We are using *sass* as foldername and not
   *scss* as the language itself is called `Sass <http://sass-lang.com/>`_. Always use the full written acronym.


static/
-------

.. important::
    This folder is publicly available, all files can be accessed via ``http://yourwebserver/static/``.

The general folder layout looks as follows:

.. code-block:: text

    static/
    ├─ css/
    ├─ fonts/
    ├─ img/
    ├─ js/
    ├─ swf/
    └─ ...

If folders are not required, just simply remove them. For demo content (which might be later integrated as media files)
create a folder called **dummy/**, for example: ``/static/img/dummy`` and place those images there. This folder will
be ignored by the ``gulp preprocess`` and ``gulp images`` commands.

When a folder reaches a certain file count, make use of grouping and create additional sub-directories such as
``/static/img/icons`` or ``/static/js/addons/jquery``.


templates/
----------

All Django templates should be allocated within the ``templates/`` folder. This also applies for apps or inclusion
files. When using `Haml <http://haml.info/>`_, set your configuration so the templates get compiled into
**/templates**.

The default *index.html* is always ``templates/base.html``.

Global inclusion files are placed within ``templates/includes/``. Addons normally have their own *includes/* folder
so they are not overcrowding the global includes folder.
