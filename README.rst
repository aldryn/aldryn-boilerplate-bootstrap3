===================
Divio Standard Site
===================


General Setup
=============

In general you will need to open a console and run ``cd #path#``
where #path# represents the location of all your local projects on your file system.


Linux/OSX Setup
===============

#. run ``git clone #url#`` replace #url# with the ssh url provided on github
#. run ``cd #path#`` replace #path# with the project folder, usually the name on github
#. run ``make init`` to setup the project on your local machine
#. proceed to 'Runserver' steps


Maintanance
-----------

#. run ``cd #path#`` replace #path# with the project folder, usually the name on github
#. run ``make update`` to upgrade the project (will ``git pull``, update dependencies and migrate the database)
#. proceed to 'Runserver' steps


Runserver
---------

#. run ``make run`` to start the local server for your project
#. open ``http://localhost:8000`` in a browser to view the project

Additional to the commands, you can append the following variables: ``PORT=8001`` and ``BRANCH=master``


Parse CSS
---------

#. in the project root folder
#. run ``make css`` (or ``compass watch .``)


Deployment
----------

- Check ``deployment.py`` and ``config.ini`` commit and push your changes and run ``fab dev project.init``
- Database config and API keys should be defined in ``src/settings/settings_server_xxx.py`` for the time being.
- make sure you have ``dploi-fabric``: ``fab dev deploy``


Windows Setup
=============

#. run ``git clone #url#`` replace #url# with the ssh url provided on github
#. run ``cd #path#`` replace #path# with the project folder, usually the name on github
#. run ``virtualenv env`` to create a virtual environment
#. activate the environment using ``cd env/Scripts`` and run ``activate``
#. move back to the project root using ``cd #path#``
#. run ``pip install -r requirements.txt`` to install all requirements
#. proceed to 'Runserver' steps


Maintanance
-----------

#. run ``cd #path#`` replace #path# with the project folder, usually the name on github
#. run ``git pull`` to get the latest update
#. run ``pip install -r requirements.txt --upgrade`` to upgrade the project
#. proceed to 'Runserver' steps


Runserver
---------

#. run ``python run.py`` to start the local server for your project
#. open ``http://localhost:8000`` in a browser to view the project

Additional to the commands, you can append the following variables: ``--port 8001`` and ``--public``


Installation
============

#. Install Git from http://help.github.com/articles/set-up-git
#. Configure Git (you might want to use a GUI tool http://www.git-tower.com/ | http://windows.github.com/)
#. Install Python 2.7.x from http://www.python.org/download/
#. Install Setuptools 2.7 from http://pypi.python.org/pypi/setuptools/
#. Install virtualenv using ``easy_install virtualenv`` inside a command prompt
#. Install pip using ``easy_install pip`` inside a command prompt

#. Install Ruby 1.9.x from http://rubyinstaller.org/
#. run ``gem update``
#. run ``gem install compass``


Windows Notes
-------------
#. Set correct PATH variable: Go to ``System > Advanced system settings > Environment variables > PATH`` and add ``;C:\Python27;C:\Python27\Scripts;C:\Ruby193\bin``. (you might change the path depending on your configuration)
#. You might want to reastart the Sysem on several occasions: Installing Python/Ruby and setting the PATH variable.