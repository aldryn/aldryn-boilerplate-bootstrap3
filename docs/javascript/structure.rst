Structure
=========

We use ``static/js/base.js`` as a single point of entry. Within this file, we lazy load additional elements using
require.js.

In addition, we use ``Cl`` as global namespace for all our custom code or addons to keep the global namespace clean.
Following this guideline, we use as initiation Cl.Base or Cl.Application for our website. See
``static/js/modules/cl.utils.js`` as example.

Always add the appropriate prefix to the filename. If there are multiple libraries used within the file, the wrapping
namespace should win. In case of Cl.Utils we use jQuery, MBP and class.js. Cl wins as Cl.Utils is the wrapper.


addons/
-------

Separate modules which are plug-n-play able and add them into this folder. Traditionally the
`classjs-plugins <https://github.com/FinalAngel/classjs-plugins>`_ are added here.


libs/
-----

We include three major frameworks to help us with JavaScript:
`jQuery <http://jquery.com>`_,
`Require.js <http://requirejs.org>`_ and
`class.js <https://github.com/FinalAngel/classjs>`_

class.js is simpler than the bloated jQuery UI and offers faster performance. It simply provides a more traditional
class based inheritance model but still uses prototypal inheritance.

Additional libraries such as respond.js or html5.js provide html/css shivs for older browsers.


modules/
--------

Additional modules which are loaded using **require.js** or other systems should be placed in this folder.

Addons are typically loaded using *django-sekizai* where modules present an easier way to structure globally required
JavaScript or an application by itself. Add additional folders to further support organization when required.

.. HINT::
   ``static/js/modules/ckeditor.wysiwyg.js`` is loaded by the djangocms-text-ckeditor module to define additional
   styles for the CKEditor. So it is natural to place this file into the **modules/** folder.
