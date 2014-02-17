==================
Aldryn Boilerplate
==================

This is the aldryn standard boilerplate.


=================
Coding Guidelines
=================





JavaScript
----------

* Use **tabs** and **not** spaces
* Use camelCase for variables and **not** underscores or dashes
* Use **dott** annotation ``.`` for javascript file naming
* Use **single-quotes** ``'`` for **all** values
* Use ``base.js`` for global and general functions and avoid adding js files to the root
* Use the frameworks prefix inside the ``plugins`` folder
* Use the singleton pattern to structure code
* JavaScript should validate JS Lint
* Whenever possible, use full words instead of shorthands like ``count`` instead of cnt
* Keep <script> and the following starting enclosure on the same level
* Separate all script tags within a ``{% addtoblock "js" %}``
* Do not add spaces when writing ``if(true) {} else {}`` or ``function helloWorld() {}``
* Always use semicolons and full brackets except shortcuts like ``var i = (true) ? 'yes' : 'no';`` or single lines ``if(index <= 0) index = 0;``
* Never use $ for variable names like ``var $el = $('.el');``
* Ensure that JavaScript widgets don't create distrubances while the dom is loading


Backend
-------

Everyone should be able to setup a project using:

* Initialize the project using ``make init``
* Update the project using ``make update``
* Run the project using ``make run``
* Compile css using ``make css``

The project initialization should ideally setup everything including database and files.
Update should replace old data with new and ensure that everything works. In generall setup
waiting times are **bad**.

Ensure that the X-UA-Compatible headers are set like:
``response.headers['X-UA-Compatible'] = 'IE=edge,chrome=1'``


Folders
-------

We always use libs, modules and plugins as a main feature to separate files. The difference between them are:

* **libs** represent libraries that work independent from one another
* **moudles** are pieces of a webseite that contain business logic and can be decoupled
* **plugins** can be easily plugged in and out without breaking the website


Example
-------

.. code:: html

    {% block content %}
    <div class="plugin-blog">
    {% if true %}
        <p>Hello World</p>
    {% endif %}
    </div>
    {% endblock content %}

    {% addtoblock "js" %}<script src="{% static "js/libs/class.min.js" %}"></script>{% endaddtoblock %}
    {% addtoblock "js" %}
    <script>
    jQuery(document).ready(function ($) {
        alert('hello world');
    });
    </script>
    {% endaddtoblock %}
