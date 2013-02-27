project_name = 'standardsite' # no '-' or spaces!
settings = {
    'dev': {
        # To change
        'hosts': ['ponyranch-4.divio.ch'],
        'bind_ip': '5.9.151.132',
        'domains': {'main': ['%s-dev.divio.ch' % project_name,]},
        'repo': 'git@github.com:divio/%s-project.git' % project_name,
        'branch': 'develop',
        'django_settings_module': 'settings_server_dev',
        # Should always be the same
        'path': '/home/%s-dev/app/' % project_name,
        'user': '%s-dev' % project_name,
        'backup_dir': '/home/%s-dev/tmp/' % project_name,
        'db_name': '%s-dev' % project_name,
        'db_username': '%s-dev' % project_name,
    },
}
