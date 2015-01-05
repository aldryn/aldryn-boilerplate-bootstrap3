===========================
Aldryn Boilerplate Standard
===========================

3.0.6
-----
- update to css rule order guidelines
- stubbing full console api instead of just console.log now in unsupporting browsers

3.0.5
-----
- added IIFE for js code in order to maintain 'use strict'
- update version numbers
- rename to aldryn-boilerplate-standard
- fixed issues with minification references
- fixed an issue with namespaces

3.0.4
-----
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
-----
- added X-UA-Compatible tag again as validation passes now
- update javascript guidelines
- update font awesome icons to 4.2.0
- update bootstrap to 3.3.0
- fixed an issue with icon fonts line-height
- fixed an issue with meta tag rendering (still commented as most are invalid)
- fixed an issue with gulp exclusion patterns

3.0.2
-----
- added BEM naming conventions
- added a guideline to use ``js-`` prefix for javascript functionality
- added z-index function helper
- changed structure of ``layout/_mixins.scss``
- changed sass file heading end ending comments to be more descriptive
- removed compress as dependency

3.0.1
-----
- added ``Gemfile`` in order to bundle install requirements locally
- added additional spaces to ``ckeditor.wysiwyg.js``
- changed code to latest css guideline change **use space after colon**
- updated docs
- updated to latest cl.debug script

3.0.0
-----
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
-----
- added snippets to documentation
- changed menu's according to the snippet guidelines

2.3.2
-----
- added new foundation 5 grid
- modified templates for foundation 5 grid
- disable pie as default

2.3.1
-----
- added google-verification metatag from meta_tags forloop
- removed deprecated ifequal
- switched from tabs to spaces
- fixed an issue with z-index on noscript class
- fixed an issue with footer menu naming

2.3.0
-----
- added gulp task management
- added .jshintrc configuration file
- added package.json for node packaging
- optimised js libraries to pass jslint tests
- moved google analytics code to the head

2.2.1
-----
- added fix for ff retina rendering within ``_retina.scss``
- update jQuery to version 1.11
- update docs with requirements
- update config.rb for local usage
- removed jQuery map file as it is not mandatory anymore

2.2.0
-----
- added docs
- changed README.rst to include new docs
- rename modules/ into layout/
- rename plugins/ into addons/
- fixes an issue with multiple elements on ckeditor.wysiwyg

2.1.2
-----
- rename to aldryn-boilerplate
- update {% if site_settings.site.name %} to {{ request.site.name }}
- update 500.html to only support i18n and static tags

2.1.1
-----
- added aldryn head and tails to base_root
- added navigation title within navigation
- remove retina logo (needs to be set intentionally)

2.1.0
-----
- added all.scss files for all folders
- added sites folder for custom changes
- added tpl_home.html
- moved mixins to modules folder
- removed 960gs
- fixed an issue with favicons on ie8 and 9

2.0.3
-----
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
-----
- move settings into separate folder
- remove version from bootstrap into changelog
- fixed an issue with retina ddpx

2.0.1
-----
- fixed an issue with form fields min-width
- use relative paths

2.0.0
-----
- added foundation grid
- added twitter bootstrap helpers
- added fontastic as font provider
- added require.js
- added respond.js for full responsive support
- updated libraries such as jquery, class.js and html5.js
- updated most of the divio boilerplate
- use of libs/modules/plugins structure

1.0.0
-----
- initial release
