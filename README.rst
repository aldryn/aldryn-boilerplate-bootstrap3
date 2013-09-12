=================
Divio Boilerplate
=================

This is the standard boilerplate and needs to be injected into the following repository when
creating a new project:

* https://github.com/divio/divio-django-template
* https://github.com/divio/divio-flask-template
* https://github.com/djeese/control-panel (as boilerplate)


=================
Coding Guidelines
=================

HTML
----

* Use **tabs** and **not** spaces
* Use **dashes** to separate names, **not** camelCase or underscore
* Use **underscore** for html file naming
* Use **double-quotes** `"` for all attributes including django-template tags
* HTML **has to validate** using `W3C <http://www.w3.org/2001/sw/BestPractices/>`_ guidelines
* HTML should be modular and reusable, do not use easy names like "job" or "item" on top level. Use "plugin-jobs" instead
* Keep all html on the same level after a django template block except for `{% forloop %}` or `{% if %}`
* In general **code readability first**


CSS / SCSS
----------

* Do **not** add more files into the sass `partials` directory, use `plugins` instead
* Do **not** overuse nesting! If you got only one instance, use one line
* Use **tabs** and **not** spaces
* Use **dashes** to separate names, **not** camelCase or underscore
* Use **dashes** for scss file naming
* Use **double-quotes** `"` for all text values
* Use `_custom.scss` for custom css files, don't create additional files
* Use the single-line style instad of block-style and group:

	#. color, font-size, line-height, font-*
	#. width, height, padding, margin
	#. padding, background
	#. includes

* Whenever possible, define setting variables inside `_settings.scss`
* Whenever possible, try to avoid referencing css using their parent like div.container
* CSS has not to validate due to several backwards-compatibility reasons

JavaScript
----------

* Use **tabs** and **not** spaces
* Use camelCase for variables and **not** underscores or dashes
* Use **dott** annotation `.` for javascript file naming
* Use **single-quotes** `'` for **all** values
* Use `base.js` for global and general functions and don't add any more js files to the root
* Use the frameworks prefix inside the `plugins` folder
* JS should validate JS Lint
* Keep <script> and the following starting enclosure on the same level
* Separate all script tags within a ´{% addtoblock "js" %}´

Eaxample
--------

.. code:: html

	{% block content %}
	<div class="plugin-blog">
	{% if true %}
		<p>Hello World</p>
	{% endif %}
	</div>
	{% endblock content %}

	{% addtoblock "js" %}<script src="{% static "js/libs/class.min.js" %}"></script>{% endaddtoblock "js" %}
	{% addtoblock "js" %}
	<script>
	jQuery(document).ready(function ($) {

	});
	</script>
	{% endaddtoblock %}