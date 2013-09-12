=================
Divio Boilerplate
=================

This is the standard boilerplate and needs to be injected into the following repository when
creating a new project:

* https://github.com/divio/divio-django-template
* https://github.com/divio/divio-flask-template
* https://github.com/djeese/control-panel (as boilerplate)


=======
Caveats
=======

Compass / SASS
--------------

* Do **not** add more files into the sass `partials` directory, use `plugins` instead.
* Do **not** overuse nesting! If you got only one instance, use one line.
* Use `_custom.scss` for custom css files, don't create additional files.
* Whenever possible, define setting variables inside `_settings.scss`.
* Use the single-line style instad of block-style and group:

	* color, font-size, line-height, font-*
	* width, height, padding, margin
	* padding, background
	* includes

