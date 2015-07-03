********
Services
********


Travis
======

The `Travis <http://docs.travis-ci.com/>`_ configuration is farily straight
forward. You can see our example configuration file for reference. The main
important part here is to add all your credentials using ``travis encrypt`` for
security reasons.

You can install the travis command line tool by running ``gem install travis``.


Sauce Labs
==========

`Sauce Labs <https://saucelabs.com/>`_ helps us to run our unit or integration
tests on multiple browsers.

When using our test suite locally, `phantomjs <http://phantomjs.org>`_ is used
for the clear speed gain especially on integration tests. Yet this does not
test on real browser where many issues might arise. For this case we configured
``.travis.yml`` to connect to Sauce Labs and run our test against a matrix
of browsers.

For each new setup you need to adapt the ``env: global:`` variables by adding::

    travis encrypt SAUCE_USERNAME={USER} --add
    travis encrypt SAUCE_ACCESS_KEY={TOKEN} --add

Where ``{USER}`` represents the sub-account user name and ``{TOKEN}``
the sub-account token.

.. important::
    To get the correct
    `status image <https://docs.saucelabs.com/reference/status-images/>`_
    from Sauce Labs you will have to create **sub-accounts** for each project.
    Otherwise all tests share the same badge.

We setup the configuration files to skip Sauce Connect when you test locally.
It will only run on Travis.


Browser Matrix
--------------

You can configure the browser matrix within ``/tests/base.conf.js``. There is
a nice `platform configurator
<https://docs.saucelabs.com/reference/platforms-configurator/>`_ available to
you if you want to add more browsers.


Code Climate
============

We also support `Code Climate <http://codeclimate.com>`_ to show the current
coverage status. You simple need to import your project and add the appropriate
repo token::

    travis encrypt CODECLIMATE_REPO_TOKEN={TOKEN} --add

Where ``{TOKEN}`` represents the key from Code Climate.
