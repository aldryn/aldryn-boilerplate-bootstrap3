SHELL := /bin/bash

PORT = 8000
ENV = env
VENV = source $(ENV)/bin/activate
PIP = $(VENV); $(ENV)/bin/pip
MANAGE = $(VENV); $(ENV)/bin/python

all:
	make run

install:
	virtualenv $(ENV)
	$(PIP) install -r requirements.txt
	$(MANAGE) manage.py migrate

run:
	$(MANAGE) manage.py runserver 0.0.0.0:$(PORT)
