"""
Just a quick hack to collect all "media" directories in INSTALLED_APPS instead
of only the "static" directories
"""

from django.contrib.staticfiles.finders import AppDirectoriesFinder
from django.contrib.staticfiles.storage import AppStaticStorage

class AppStaticStorageMedia(AppStaticStorage):
    source_dir = 'media'

class AppDirectoriesFinderAsMedia(AppDirectoriesFinder):
    storage_class = AppStaticStorageMedia