##############################
Aldryn Boilerplate Bootstrap 3
##############################


4.0.9
=====
- Removed dead references to select2 images
- Removed versioning query string parameters
- Disabled glyphicons per default


4.0.8
=====
- add ``{% url "pages-root" %}`` to determine root url (home)
- remove reference to ``select2.png`` in ``_select2.scss``
- fix automatic path to glyphicons (requires aldryn-bootstrap3)
- change from ``protected`` to ``excluded`` in ``boilerplate.json``


4.0.7
=====
- make clear that ``base.css`` is auto-generated and put it as protected file


4.0.6
=====
- remove ``{% load url %}``


4.0.5
=====
- remove outdated ``keyframes`` mixin (use plain property with autoprefixer)
- remove ``micro-clearfix`` mixin, use ``clearfix`` class or mixin from bootstrap
- changed JavaScript linting to ESLint instead of JSHint
- improved ``docs`` output
- fixed broken ``bower`` task
- fixed some gulp task being recursive
- no longer load "url" templatetag library from future


4.0.4
=====
- fix language template selection to use ``lang.code``


4.0.3
=====
- separate devDependencies and dependencies for aldryn
- restructured gulp tasks
- fixed an issue with google fonts paths being rewritten incorrectly


4.0.2
=====
- added gitignore to Aldryn protected files


4.0.1
=====
- fixed dependency linking for Aldryn
- added docs about ajax promises


4.0.0
=====
- added libsass support
- added ``gulp bower`` command
- updated ``templates/404.html`` to look better
- updated Font Awesome to 4.4.0
- updated Font Awesome to use sass library
- updated content templates
- updated license information
- updated documentation
- removed compass support
- use @error instead of @warn in sass
- removed `lh` from ``mixins/_functions.scss``


3.4.2
=====
- added ``tools`` folder
- added ``tools/server`` for local testing
- added additional documentation
- updated documentation


3.4.1
=====
- added ``button-variant-outline``mixin
- added ``.spacer-sm`` an ``spacer-md``
- changed line length rule for JS & HTML
- changed ``.jshintrc`` settings slightly
- improved ``.travis.yml`` structure


3.4.0
=====
- major update to testing infrastructure
- added integration tests
- added browserslist
- added coveralls support
- added custom icon-font support
- update dependencies
- update jshint task to fail on travis correctly
- update documentation
- changed all ``{% load static %}`` instances to ``{% load staticfiles %}``
- move tooling in ``package.json`` from dependencies to **dev**Dependencies
- removed cl.debug.js


3.3.4
=====
- update to bootstrap 3.3.5
- update dependencies
- simplified templates
- changed $speed value to $speed-base


3.3.3
=====
- added new ``mixins`` folder to ``private/sass/`` for mixins
- style adaptions to html markup
- removed unused meta tag insertions
- update documentation


3.3.2
=====
- documentation improvements
- fix an issue with ``setStorage`` and ``getStorage`` on private browsing mode
- freeze ``package.json`` and ``bower.json`` versions


3.3.1
=====
- documentation improvements
- added more tests
- added missing fontawesome to ``bower.json``


3.3.0
=====
- added scss-lint
- added jasmine and karma
- added separate ``layout/_button.scss`` file for buttons
- moved javascript ``js/tests/`` into the root for a shared test setup
- moved Sass ``addons/_browser.scss`` and ``addons/_select2.scss`` to ``libs``
- changed gulpfile.js file to fit guidelines
- removed csscomb but kept settings
- removed qunit
- removed ``pie.htc`` and ``box-sizing.htc``


3.2.1
=====
- removed js/modules
- update to protected files for aldryn


3.2.0
=====
- added yuidocs syntax and generators
- added Cl.Utils.redirectTo
- added Cl.Utils.getStorage and Cl.Utils.setStorage
- deprecate Cl.Utils.mobile and Cl.utils.tablet
- update npm dependencies
- update CKEditor setting styles and removed double usage
- fixes an issue with navigation.html


3.1.5
=====
- update to bootstrap 3.3.4
- update to qunit 1.17.x


3.1.4
=====
- allow empty span in ckeditor
- fix an issue in boilerplate.json


3.1.3
=====
- update json file for aldryn
- fix an issue with the lang-nav markup


3.1.2
=====
- added additional markup to langnav
- improved seo markup
- fix an issue with mobile menu not opening
- fix an issue with header html outline
- fix an issue with spacer classes when empty


3.1.1
=====
- use default naming space ``fa-`` for fontawesome
- update documentation


3.1.0
=====
- rename to aldryn-boilerplate-bootstrap3
- update browser-sync to v2
- update bootstrap settings file to full implementation
- update to jQuery 2.x


3.0.10
======
- added ckeditor.wysiwyg.js temporarily to js/modules/


3.0.9
=====
- added contribution info and authors
- updated font awesome icons to 4.3.0
- removed XHTML syntax guideline


3.0.8
=====
- temporary disable .map generation by default


3.0.7
=====
- added 120 line rule for javascript
- update to bootstrap 3.3.2
- update to css guidelines on use of universal selectors
- updated npm dependencies, fixes jscs behaviour
- update to .csscomb.json to match latest changes in guidelines
- documentation fixes


3.0.6
=====
- update to css rule order guidelines
- stubbing full console api instead of just console.log now in unsupporting browsers
- fixed an issue where docs did not get rendered anymore on rtfd.org


3.0.5
=====
- added IIFE for js code in order to maintain 'use strict'
- update version numbers
- rename to aldryn-boilerplate-standard
- fixed issues with minification references
- fixed an issue with namespaces


3.0.4
=====
- update to id declaration guidelines
- update to css formatting guidelines
- update to js html injection guideline
- update to html django block formatting
- update bower.json dependencies
- update packages.json dependencies
- fixed guideline issues in css
- fixed minor html and css mistakes
- separated font awesome utilities from iconography
- removed requirejs as dependency


3.0.3
=====
- added X-UA-Compatible tag again as validation passes now
- update javascript guidelines
- update font awesome icons to 4.2.0
- update bootstrap to 3.3.0
- fixed an issue with icon fonts line-height
- fixed an issue with meta tag rendering (still commented as most are invalid)
- fixed an issue with gulp exclusion patterns


3.0.2
=====
- added BEM naming conventions
- added a guideline to use ``js-`` prefix for javascript functionality
- added z-index function helper
- changed structure of ``layout/_mixins.scss``
- changed Sass file heading end ending comments to be more descriptive
- removed compress as dependency


3.0.1
=====
- added ``Gemfile`` in order to bundle install requirements locally
- added additional spaces to ``ckeditor.wysiwyg.js``
- changed code to latest css guideline change **use space after colon**
- updated docs
- updated to latest cl.debug script


3.0.0
=====
- switch to twitter bootstrap
- added more mixins
- added ``js/libs/bootstra.min.js`` to libraries
- added outdated Browser script
- added bower
- added .jshintrc to root
- added .jscsrc to root and jscsrc functions
- added .editorconfig
- refactored ``gulpfile.js``
- refactored settings files
- refactored html templates for more ease to follow outline and w3c guidelines
- file setup change (media queries should now be integrated directly)
- renamed ``layout/_icons.scss`` to ``layout/iconography.scss``
- updated js libraries to latest version
- removed foundation
- removed divio bootstrap
- removed pie and normalize in favour of bootstraps integration
- removed ``layout/_retina.scss``
- removed ``layout/_mobile.scss``
- removed console.min.js


2.3.3
=====
- added snippets to documentation
- changed menu's according to the snippet guidelines


2.3.2
=====
- added new foundation 5 grid
- modified templates for foundation 5 grid
- disable pie as default


2.3.1
=====
- added google-verification metatag from meta_tags forloop
- removed deprecated ifequal
- switched from tabs to spaces
- fixed an issue with z-index on noscript class
- fixed an issue with footer menu naming


2.3.0
=====
- added gulp task management
- added .jshintrc configuration file
- added package.json for node packaging
- optimised js libraries to pass jslint tests
- moved google analytics code to the head


2.2.1
=====
- added fix for ff retina rendering within ``_retina.scss``
- update jQuery to version 1.11
- update docs with requirements
- update config.rb for local usage
- removed jQuery map file as it is not mandatory anymore


2.2.0
=====
- added docs
- changed README.rst to include new docs
- rename modules/ into layout/
- rename plugins/ into addons/
- fixes an issue with multiple elements on ckeditor.wysiwyg


2.1.2
=====
- rename to aldryn-boilerplate
- update {% if site_settings.site.name %} to {{ request.site.name }}
- update 500.html to only support i18n and static tags


2.1.1
=====
- added aldryn head and tails to base_root
- added navigation title within navigation
- remove retina logo (needs to be set intentionally)


2.1.0
=====
- added all.scss files for all folders
- added sites folder for custom changes
- added tpl_home.html
- moved mixins to modules folder
- removed 960gs
- fixed an issue with favicons on ie8 and 9


2.0.3
=====
- added title value to title=_("Navigation")
- added additional standard fontastic icons
- added qunit test system
- update boilerplate.json
- update requirejs
- update respond.js
- update jquery.mbp.js
- fixed an issue when using htmlmin library
- fixed an issue where icons are uppercase instead of lowercase
- relocated meta_tags block position
- relocated extend_breadcrumb block position


2.0.2
=====
- move settings into separate folder
- remove version from bootstrap into changelog
- fixed an issue with retina ddpx


2.0.1
=====
- fixed an issue with form fields min-width
- use relative paths


2.0.0
=====
- added foundation grid
- added twitter bootstrap helpers
- added fontastic as font provider
- added require.js
- added respond.js for full responsive support
- updated libraries such as jquery, class.js and html5.js
- updated most of the divio boilerplate
- use of libs/modules/plugins structure


1.0.0
=====
- initial release
