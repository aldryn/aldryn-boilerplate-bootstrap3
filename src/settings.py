# -*- coding: utf-8 -*-
import os
_ = lambda s: s

DEBUG = False
TEMPLATE_DEBUG = DEBUG

SECRET_KEY = 'n2y4ao5%w+nho4k!nax6!_b(6m#7k-5ld(@+ne&amp;jx&amp;pjqogc26'
SITE_ID = 1
ROOT_URLCONF = 'urls'

SRC_ROOT = os.path.dirname(__file__)
PROJECT_ROOT = os.path.join(SRC_ROOT, '..')
DATA_ROOT = os.environ.get('DATA_ROOT', os.path.join(PROJECT_ROOT, 'tmp'))
MEDIA_ROOT = os.path.join(DATA_ROOT, 'media')
STATIC_ROOT = os.path.join(DATA_ROOT, 'static_collected')

MEDIA_URL = '/media/'
STATIC_URL = '/static/'

ADMIN_MEDIA_PREFIX = ''.join([STATIC_URL, 'admin/'])
STATICFILES_DIRS = [os.path.join(PROJECT_ROOT, 'static')]
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'project.staticfiles_finders.AppDirectoriesFinderAsMedia',
]

LOCALE_PATHS = [
    os.path.join(PROJECT_ROOT, 'locale'),
]

# databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(DATA_ROOT, 'db.sqlite3'),
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
        }
}


# template related
TEMPLATE_DIRS = [os.path.join(PROJECT_ROOT, 'templates')]
SEKIZAI_IGNORE_VALIDATION = True  # Silence the whining!
TEMPLATE_LOADERS = [
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
]


# emails
SERVER_EMAIL = 'django@%s' % os.uname()[1]
ADMINS = (
    # ('Your Name', 'your_email@domain.com'),  # exception mails are handled by sentry
)
MANAGERS = ADMINS

DEFAULT_FROM_EMAIL = 'norepy@divio.ch'

# i18n, timezones and formatting
TIME_ZONE = 'Europe/Zurich'
USE_TZ = True
LANGUAGE_CODE = 'en'
USE_I18N = True
USE_L10N = True
DATE_FORMAT = 'd.m.Y'
DATETIME_FORMAT = 'd.m.Y H:i'
TIME_FORMAT = 'H:i'
YEAR_MONTH_FORMAT = 'F Y'
MONTH_DAY_FORMAT = 'j. F'
ALL_LANGUAGES = dict((
    # DJANGO DEFAULTS (django.conf.global_settings.LANGUAGES)
    ('ar',    _('Arabic')),
    ('bg',    _('Bulgarian')),
    ('bn',    _('Bengali')),
    ('bs',    _('Bosnian')),
    ('ca',    _('Catalan')),
    ('cs',    _('Czech')),
    ('cy',    _('Welsh')),
    ('da',    _('Danish')),
    ('de',    _('German')),
    ('el',    _('Greek')),
    ('en',    _('English')),
    ('es',    _('Spanish')),
    ('es-ar', _('Argentinean Spanish')),
    ('et',    _('Estonian')),
    ('eu',    _('Basque')),
    ('fa',    _('Persian')),
    ('fi',    _('Finnish')),
    ('fr',    _('French')),
    ('fy-nl', _('Frisian')),
    ('ga',    _('Irish')),
    ('gl',    _('Galician')),
    ('he',    _('Hebrew')),
    ('hi',    _('Hindi')),
    ('hr',    _('Croatian')),
    ('hu',    _('Hungarian')),
    ('is',    _('Icelandic')),
    ('it',    _('Italian')),
    ('ja',    _('Japanese')),
    ('ka',    _('Georgian')),
    ('km',    _('Khmer')),
    ('kn',    _('Kannada')),
    ('ko',    _('Korean')),
    ('lt',    _('Lithuanian')),
    ('lv',    _('Latvian')),
    ('mk',    _('Macedonian')),
    ('nl',    _('Dutch')),
    ('no',    _('Norwegian')),
    ('pl',    _('Polish')),
    ('pt',    _('Portuguese')),
    ('pt-br', _('Brazilian Portuguese')),
    ('ro',    _('Romanian')),
    ('ru',    _('Russian')),
    ('sk',    _('Slovak')),
    ('sl',    _('Slovenian')),
    ('sq',    _('Albanian')),
    ('sr',    _('Serbian')),
    ('sr-latn', _('Serbian Latin')),
    ('sv',    _('Swedish')),
    ('ta',    _('Tamil')),
    ('te',    _('Telugu')),
    ('th',    _('Thai')),
    ('tr',    _('Turkish')),
    ('uk',    _('Ukrainian')),
    ('zh-cn', _('Simplified Chinese')),
    ('zh-tw', _('Traditional Chinese')),
    # EXTRA LANGUAGES
    ('de-ch', _('Swiss German')),
    ('fr-ch', _('Swiss French')),
))

MULTILINGUAL_FALLBACK_LANGUAGES = {
    'en': ['de',],
    'de': ['en',],
}
CMS_LANGUAGE_CONF = MULTILINGUAL_FALLBACK_LANGUAGES
CMS_SITE_LANGUAGES = {
    # SITE_ID: [LANGUAGE_CODE_LIST]
    1: ['en', 'de'], # main
}

DEFAULT_LANGUAGE = 0  # TODO: is this still needed or just a relic of django-multilingual?

# auto build LANGUAGES based on ALL_LANGUAGES and all languages used in
# CMS_SITE_LANGUAGES
LANGUAGES = []
ALL_USED_LANGUAGE_CODES = []
for site_id, langs in CMS_SITE_LANGUAGES.items():
    for lang in langs:
        if not lang in ALL_USED_LANGUAGE_CODES:
            ALL_USED_LANGUAGE_CODES.append(lang)
ALL_USED_LANGUAGE_CODES.sort()
for lang in ALL_USED_LANGUAGE_CODES:
    LANGUAGES.append( ( lang, ALL_LANGUAGES[lang] ) )


# apps, middlewares, templatecontext, authentication backends
INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',

    # cms plugins
    'cms.plugins.flash',
    'cms.plugins.googlemap',
    'cms.plugins.link',
    'cms.plugins.snippet',
    'djangocms_text_ckeditor',
    'cms.plugins.twitter',
    'cms.plugins.video',

    # 3rd party
    'south',

    # cms related
    'cms',
    'mptt',
    'menus',
    'sekizai',

    # project
    'project',
]

TEMPLATE_CONTEXT_PROCESSORS = [
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.i18n',
    'django.core.context_processors.debug',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
    'cms.context_processors.media',
    'django.core.context_processors.static',
    'sekizai.context_processors.sekizai',
]

MIDDLEWARE_CLASSES = [
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.http.ConditionalGetMiddleware',
    'cms.middleware.multilingual.MultilingualURLMiddleware',
    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.toolbar.ToolbarMiddleware',
    'cms.middleware.user.CurrentUserMiddleware',
]

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
]

# Images / Thumbnailing
THUMBNAIL_BASEDIR = 'tmp'
THUMBNAIL_QUALITY = 85
THUMBNAIL_PRESERVE_EXTENSIONS = ['png']
THUMBNAIL_PROCESSORS = (
    'easy_thumbnails.processors.colorspace',
    'easy_thumbnails.processors.autocrop',
    #   'easy_thumbnails.processors.scale_and_crop',
    'filer.thumbnail_processors.scale_and_crop_with_subject_location',
    'easy_thumbnails.processors.filters',
)


# CMS
CMS_TEMPLATES = [
    ('fullwidth.html', _('full width')),
    ('sidebar_left.html', _('sidebar left')),
    ('sidebar_right.html', _('sidebar right')),
]
CMS_PLACEHOLDER_CONF = {
    'content_primary': {
        'plugins': ('',),
        'name': _('Primary'),
        'extra_context': {},
    },

    'content_secondary': {
        'plugins': ('',),
        'name': _('Secondary'),
        'extra_context': {},
    },

    'feature': {
        'plugins': ('',),
        'name': _('Feature'),
        'extra_context': {},
    },

    'announcement': {
        'plugins': ('TextPlugin', 'LinkPlugin'),
        'name': _('Announcement'),
        'extra_context': {},
    },
}

CMS_PAGE_MEDIA_PATH = 'uploads/cms_page_media/'
CMS_SOFTROOT = True
CMS_FLAT_URLS = False
CMS_REDIRECTS = True
CMS_SEO_FIELDS = True
CMS_MENU_TITLE_OVERWRITE = True
CMS_PERMISSION = True
CMS_MODERATOR = False

CMS_SHOW_START_DATE = True
CMS_SHOW_END_DATE = True

# PLUGIN SETTINGS
IMAGE_ASPECT_RATIO_CHOICES = (
    (1, '1:1'),
    (1.33333, '4:3'),
    (1.77777, '16:9'),
    (2.33333, '21:9'),
    )

# PLUGIN TEASER SETTINGS
CMSPLUGIN_FILER_TEASER_STYLE_CHOICES = [
    # ('plugin_teaser_picleft','Bild Links'),
]

# PLUGIN VIDEO SETTINGS
VIDEO_PLUGIN_ENABLE_ADVANCED_SETTINGS = False # disable color settings etc