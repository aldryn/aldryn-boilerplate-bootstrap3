==================
Aldryn Boilerplate
==================

develop
-------
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
- removed depricated ifequal
- switched from tabs to spaces
- fixed an issue with z-index on noscript class
- fixed an issue with footer menu naming

2.3.0
-----
- added gulp task management
- added .jshintrc configuration file
- added package.json for node packaging
- optimized js libraries to pass jslint tests
- moved google analytics code to the head

2.2.1
-----
- added fix for ff retina rendering whithin ``_retina.scss``
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