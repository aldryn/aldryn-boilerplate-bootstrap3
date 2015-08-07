********
Services
********


Travis
======

The `Travis <http://docs.travis-ci.com/>`_ configuration is fairly
straightforward. You can see our example configuration file for reference. The
important point here is to add all your credentials using ``travis encrypt``
for security reasons.

You can install the ``travis`` command line tool by running ``gem install
travis``.


Sauce Labs
==========

`Sauce Labs <https://saucelabs.com/>`_ helps us to run our unit and integration
tests on multiple browsers.

When using our test suite locally, `phantomjs <http://phantomjs.org>`_ is used
in the interests of speed, especially on integration tests. However this does
not test on real browsers, so is not comprehensive and various issues can slip
through undetected. In order to provide real-browser test coverage,
``.travis.yml`` is configured to connect to Sauce Labs and run our test against
a matrix of browsers.

For each new setup you need to adapt the ``env: global:`` variables by adding::

    travis encrypt SAUCE_USERNAME={USER} --add
    travis encrypt SAUCE_ACCESS_KEY={TOKEN} --add

Where ``{USER}`` represents the sub-account user name and ``{TOKEN}``
the sub-account token.

See the example `.travis.yml <https://github.com/aldryn/
aldryn-boilerplate-bootstrap3/blob/master/.travis.yml>`_:

- the first ``secure`` line in ``env: global:`` represents encrypted Sauce Labs sub-account user name
- the second ``secure`` line stands for encrypted Sauce Labs sub-account token
- the third ``secure`` line is the encrypted Code Climate token

.. important::
    To get the correct
    `status image <https://docs.saucelabs.com/reference/status-images/>`_
    from Sauce Labs you will have to create **sub-accounts** for each project.
    Otherwise, all tests will share the same badge.

We set up the configuration files to skip Sauce Connect when you test locally;
these tests will only run on Travis.


Browser Matrix
--------------

You can configure the browser matrix within ``/tests/base.conf.js``. There is
an elegant `platform configurator
<https://docs.saucelabs.com/reference/platforms-configurator/>`_ available to
you if you want to add more browsers.


Code Climate
============

We also support `Code Climate <http://codeclimate.com>`_ to show the current
coverage status. You simple need to import your project and add the appropriate
repo token::

    travis encrypt CODECLIMATE_REPO_TOKEN={TOKEN} --add

Where ``{TOKEN}`` represents the key from Code Climate.


Coveralls
=========

You can use `Coveralls <http://coveralls.io>`_ as an alternative to show the
current coverage status. You simply need to import your project and Karma will
take care of the rest.
