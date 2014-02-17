==================
Aldryn Boilerplate
==================

2.2.0
-----
- added docs
- changed README.rst to include new docs
- rename modules/ into layout/
- rename plugins/ into addons/

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