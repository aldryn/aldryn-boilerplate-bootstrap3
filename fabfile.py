from fabric.decorators import task

from dploi_fabric.db import pg
from dploi_fabric import supervisor, nginx
from dploi_fabric import git, utils, virtualenv, south, django_utils, project, redis, celery

from dploi_fabric.conf import load_settings

@task
def dev():
    load_settings('dev')

@task
def stage():
    load_settings('stage')

@task
def live():
    load_settings('live')

@task
def deploy():
    pg.dump.run()
    git.update()
    virtualenv.update()
    south.migrate.run()
    django_utils.collectstatic()
    supervisor.restart()
    supervisor.status()
    nginx.update_config_file()

@task
def quick_deploy():
    git.update()
    django_utils.collectstatic()
    supervisor.restart()

@task
def static_deploy():
    git.update()
    django_utils.collectstatic()
