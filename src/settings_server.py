# -*- coding: utf-8 -*-
import os
from settings import *
username = os.environ['USER']  # this is the unix username
stage = username.split('-')[1]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '%s' % username,
        'USER': '%s' % username,
        },
    }

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': 'unix:/home/%(user)s/tmp/%(user)s_main_memcached.sock' % {'user': username },
        }
}


INSTALLED_APPS.extend(['gunicorn',])

DATA_ROOT = '/home/%s/upload/' % username
MEDIA_ROOT = '/home/%s/upload/media/' % username
STATIC_ROOT = '/home/%s/static/' % username


if stage == 'dev':
    DEBUG = True
    TEMPLATE_DEBUG = DEBUG