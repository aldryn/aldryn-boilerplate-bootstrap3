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

In addition you can set fonts, icons and custom mixins here.


libs/
-----


settings/
---------


sites/
------

