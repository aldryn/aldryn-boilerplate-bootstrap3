Contribution
############

.. note::

    You are very welcome improving this boilerplate for Aldryn and your everyday use, especially the documentation always
    needs love. Feel free to fork and send us pull requests and follow the guidelines from within this section.


Code of Conduct
===============

- Ensure code validates against or own guidelines
- Write documentation about what you are doing
- If you are not sure, just ask - join our community **#aldryn** on `Freenode <http://freenode.net/>`_


Documentation
=============

To extend and run the documentation, you will need `Python <https://www.python.org/downloads/>`_ and
`Virtualenv <https://virtualenv.pypa.io/en/latest/installation.html>`_ installed on your computer. You also need
`Git <http://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_ and a GitHub account obiously.

In addition, follow the steps underneath to get them running:

#. clone the repository using ``git clone https://github.com/aldryn/aldryn-boilerplate-bootstrap3.git``
#. navigate to the documentation through ``cd aldryn-boilerplate-bootstrap3/docs``
#. run ``make install`` to install additional requirements
#. run ``make run`` to let the server run

Now you can open **http://localhost:8000** on your favorite browser and start changing the rst files within ``docs/``.

You need to be aware of `reStructuredText
<http://docutils.sourceforge.net/docs/user/rst/quickref.html>`_ to format the documentation properly.

.. admonition:: Guidelines
    :class: `important`

    - always start paths with a `/` and leave the trailing slash
    - leave two spaces before a title and one space for the 3rd level titles
    - django is written in lowercase
    - django CMS is written without hyphen and CMS as uppercase
    - Aldryn is written with a capital A
    - Write names properly: SASS, Bootstrap, JavaScript instead of sass, bootstrap and javascript
    - use dashes for list


Pull Requests
=============

Before starting to work on issues or features, please mind the branching model:

- **master** is used for hotfix releases (1.1.x)
- **develop** is used for features and issues (1.x.x)

Everything that is merged to *develop* will be released within the next proper release (1.x.x). Major releases (x.x.x)
will have their own branches but are always merged agains *develop*.


Releases
========

Always adapt the `CHANGELOG.rst <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/CHANGELOG.rst>`_
and `AUTHORS.rst <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/CHANGELOG.rst>`_ accordingly.
After the release, set the correct release notes on
`GitHub <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/releases>`_. Don't forget to update the release
version within `boilerplate.json <https://github.com/aldryn/aldryn-boilerplate-bootstrap3/blob/master/boilerplate.json>`_
