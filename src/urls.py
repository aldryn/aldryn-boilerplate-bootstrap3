from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin

admin.autodiscover()

handler404 = "project.error_views.page_not_found"
handler500 = "project.error_views.server_error"

urlpatterns = patterns('',
    (r'^admin/', include(admin.site.urls)),
    (r'^i18n/setlang/$', 'django.views.i18n.set_language'),
)


urlpatterns = patterns('',
    url(r'^static/(?P<path>.*)$', 'django.contrib.staticfiles.views.serve', {'insecure': True}),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    url(r'^', include('filer.server.urls')),
) + urlpatterns

# cms urls must be the last pattern!
if 'cms' in settings.INSTALLED_APPS:
    urlpatterns = urlpatterns + patterns('',
        (r'', include('cms.urls')),
    )
