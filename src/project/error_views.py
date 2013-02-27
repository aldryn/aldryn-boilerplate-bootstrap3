from django.template.context import RequestContext 
from django.http import HttpResponseNotFound, HttpResponseServerError
from django.views.defaults import page_not_found as django_page_not_found, server_error as django_server_error
from django.shortcuts import render_to_response
from django.template.loader import render_to_string
from django.views.static import serve

def page_not_found(request):
    try:
        try:
            from cms.models import Page
            root = Page.objects.root()
            page = root[0]
        except IndexError:
            page = root
        return HttpResponseNotFound( \
            render_to_string("404.html", {"page": page,}, RequestContext(request)))
    except: # DB table may not exist, but no import error
        return django_page_not_found(request)

def server_error(request):
    try:
        try:
            from cms.models import Page
            root = Page.objects.root()
            page = root[0]
        except IndexError:
            page = root
        return HttpResponseServerError( \
            render_to_string("500.html", {"page": page,}, RequestContext(request)))
    except:
        return django_server_error(request)