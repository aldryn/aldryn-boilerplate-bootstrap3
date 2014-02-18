Folder Structure
================

The generic folder structure is as follows:


private/
--------

This folder is intended for placing preprocessing libraries such as **sass**, **coffeescript** or **haml**.
Simply create a folder with the associated name of the library such as ``sass/`` and place configuration files on the
same level. An example structure would look like:

.. code-block:: text

    private/
    ├─ sass/
    │  └─ base.sass
    └─ config.rb

.. HINT::
   The ``config.rb`` is taken from `Compass <http://compass-style.org/>`_ which can also be used for a native sass
   setup. However aldryn-boilerplate uses the Compass **SCSS** - format as default.


static/
-------

All layout specific files will be placed in this folder. The main folder structure includes:

.. code-block:: text

    static/
    ├─ css/
    ├─ fonts/
    ├─ img/
    ├─ js/
    └─ swf/

If folders are not required, just simply remove them. For demo content (which might be later integrated as media files)
create a folder called **dummy/**, for example: ``static/img/dummy/`` and place those images there.
The dummy folder is intended to be **removed** before a website goes live.

When a structure might get more complicated, make use of grouping and create additional folders like
``static/img/icons`` or ``static/js/addons/jquery``.


templates/
----------

All django templates should be allocated within the ``templates/`` folder. This also applies for apps or inclusion
files. When using `Haml <http://haml.info/>`_, set your configuration so the templates get compiled into
**/templates/**.

The default *index.html* is always ``templates/base.html``.

Global inclusion files are placed within ``templates/includes/``. Addons normally have their own *includes/* folder
so they are not overcrowding the global folder.
