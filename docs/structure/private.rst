Private
=======

.. note::

    Let's have a closer look at the **SASS** setup within ``/private`` and explain how we structured the code in there.
    These principles can be expanded to other preprocessors options such as **LESS** or **HAML**.

Every folder within ``/private/sass`` has a file called **_all.scss**. This file ultimately gets imported by
``/private/sass/base.scss`` which gets compiled into ``/static/css/base.css``. Update the *_all.scss* file to include
additional modules, do not include files directly within *base.scss* to keep the file simple.

Let's cover the folders individually:


addons/
-------

If a component is plug and playable, it probably belongs in here. Good examples are jQuery plugins or Aldryn addons.
Sometimes larger application such as a shop might also be pluggable. If this is **not** the case, they belong into
the ``/sass/sites`` directory.

.. warning::

    You will always encounter the question wether to place a component within ``/sass/addons`` or ``/sass/sites``.
    In case of doubts, use the **sites folder**.


layout/
-------

We consider the general look & feel as *layout* of a website or application. This might include the typography, header
and footer, icons or the printable version. The layout can be broken down into further parts if a website gets
massive. We advice in general against this strategy and rather prefer to use ``/sass/sites`` to create specific layouts
and derivate from a global common style guide.

.. warning::

    **Everything that targets a specific element**, such as custom styles for bootstrap components or a specific form
    error, **belongs into** ``/sass/addons`` **or** ``/sass/sites``.


libs/
-----

All independent files are placed within this folder. This implies that the order of inclusion does not matter within
``/sass/libs/_all.scss``. The only exception is ``/sass/libs/_bootstrap.scss`` for re-using the bootstrap variables.

.. hint::

    Libraries are, in their very core, plug and playable. The main difference is, that **other parts** will break
    **if they are removed**.


settings/
---------

It is very useful to store values, that are used more than twice, within their own variable. We even encourage to
store **all color values** within the settings. **Don't repeat yourself**. Create a sub-structure, similar to */sites*
if the structure gets more complex.

.. warning::

    Do **not** add additional variables within ``/private/sass/settings/_bootstrap.scss``. This file is reserved for
    **bootstrap only** variables.


sites/
------

Besides */addons* you will work mostly within the ``/private/sass/sites`` folder. All custom elements that are in
general not plug and playable, fixed into the website somewhere or specific components, gets thrown in here.

This will force you to scheme structure patterns. We give you some examples depending on the requirements for your
project:

.. note::

    **Multisite Setup**

    Let's assume you create one style guide sharing different marketing websites or applications, your structure might
    look something like:

.. code-block:: text

    sites/
    ├─ application/
    │  ├─ _all.scss
    │  ├─ _general.scss
    │  └─ _wizard.scss
    ├─ marketing/
    │  ├─ _all.scss
    │  ├─ _layout.scss
    │  └─ _addons.scss
    ├─ _application.scss (imports application/_all.scss)
    └─ _marketing.scss (imports marketing/_all.scss)


.. note::

    **Theme Setup**

    Let's assume you are using different themes for the same markup, your structure might look something like:

.. code-block:: text

    sites/
    ├─ dark_theme/
    │  ├─ _all.scss
    │  ├─ _header.scss
    │  └─ _footer.scss
    ├─ white_theme/
    │  ├─ _all.scss
    │  ├─ _header.scss
    │  └─ _footer.scss
    ├─ dark_theme.scss (imports dark_theme/_all.scss)
    └─ white_theme.scss (imports white_theme/_all.scss)
