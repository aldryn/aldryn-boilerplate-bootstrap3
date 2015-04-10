Structure
=========



* Use a maximum length of 120 characters, however 80 is preferred
* Use ``base.js`` for global and general functions and avoid adding js files to the root
* Use the frameworks prefix inside the ``addons`` folder





We use ``static/js/base.js`` as a single point of entry. Within this file, we lazy load additional elements using
require.js.

In addition, we use ``Cl`` as global namespace for all our custom code or addons to keep the global namespace clean.
Following this guideline, we use as initiation Cl.Base or Cl.Application for our website. See
``static/js/addons/cl.utils.js`` as example.

Always add the appropriate prefix to the filename. If there are multiple libraries used within the file, the wrapping
namespace should win. In case of Cl.Utils we use jQuery, MBP and class.js. Cl wins as Cl.Utils is the wrapper.


addons/
-------

Separate modules which are plug-n-play able and add them into this folder. Traditionally the
`classjs-plugins <https://github.com/FinalAngel/classjs-plugins>`_ are added here.

If you use external addons, such as jquery.select2, ensure that those files get added minified. Try to avoid
changing the code of external addons as this over complicates the update process if hotfixes are released.


libs/
-----

We include three major frameworks to help us with JavaScript:
`jQuery <http://jquery.com>`_ and
`class.js <https://github.com/FinalAngel/classjs>`_

class.js is simpler than the bloated jQuery UI and offers faster performance. It simply provides a more traditional
class based inheritance model but still uses prototypal inheritance.

Additional libraries such as respond.js or html5.js provide html/css shivs for older browsers.


tests/
------

Using QUnit you can create your JavaScript Unit tests here. This is a very simple setup and the folder structure
within this area can be customized according to your needs.

