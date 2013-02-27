SHELL := /bin/bash
# VARIABLES
CHDIR_SHELL := $(SHELL)
PORT = 8000
VIRTUALENV = virtualenv
ENV = env
SETTINGS = settings_local
MANAGE = $(ENV)/bin/python src/manage.py
PIP = $(ENV)/bin/pip

FABRIC = $(ENV)/bin/fabric
STAGE = stage
REQUIREMENTS = requirements_local.txt
PROJECT_DIR = ./src

# COMMANDS
all: run

init: virtualenv
	mkdir -p tmp

	cp -f requirements_local.txt-example requirements_local.txt
	cp -f $(PROJECT_DIR)/settings_local.py-example $(PROJECT_DIR)/settings_local.py

	$(PIP) install -r $(REQUIREMENTS)

	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) createcachetable dbcache
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) syncdb --all
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) migrate --fake

run: virtualenv
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) runserver 0.0.0.0:$(PORT)

update: virtualenv
	git pull origin $(BRANCH)

	$(PIP) install -r $(REQUIREMENTS) --upgrade
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) syncdb
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) migrate

css:
	compass watch .

virtualenv:
	$(VIRTUALENV) $(ENV)

makemessages: virtualenv
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) makemessages --all --ignore=env/* --ignore=tmp/*

compilemessages: virtualenv
	@DJANGO_SETTINGS_MODULE=$(SETTINGS) $(MANAGE) compilemessages