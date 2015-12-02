**********
JavaScript
**********

.. note::

    This section is heavily inspired by a Airbnb JavaScript Style Guide,
    Yandex Codestyle, Idiomatic Javascript and lots of common sense, really.


Why?
====

    "All code in any code-base should look like a single person typed it,
    no matter how many people contributed." - Rick Waldron

These are the fundamental principles we should follow when we design and
develop software.

- Consistent code is easy to read.
- Simple code is easy to maintain.
- In simple expressions it's harder to make mistakes.

----


Formatting
==========


Blocks
------

Use braces with all blocks. Don't do inline blocks.

.. code-block:: javascript

    // bad
    if (test)
        return false;

    // bad
    if (test) return false;

    // good
    if (test) {
        return false;
    }

    // bad
    function () { return false; }

    // good
    function () {
        return false;
    }

When you're using multi-line blocks with if and else, put else on the same
line as your if block's closing brace.

.. code-block:: javascript

    // bad
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }


Comments
--------

Follow the guidelines.
Use ``//`` for single line comments. Place single line comments on a newline
above the subject of the comment. Between the ``//`` and the text of the
comment should be one space character.

.. code-block:: javascript

    // bad
    var active = true;  //is current tab

    // good
    // is current tab
    var active = true;

Most importantly, **keep comments up to date** if the code changes.


Whitespace
----------

With proper ``.editoconfig`` and ``eslint`` setup these will be enforced
automatically, but still:

- 4 spaces for tabs.
- Place 1 space before leading curly brace.
- Place 1 space before the opening parenthesis in ``if``, ``while``, etc.
- Place 1 space after colon.
- Place no space before the argument list in function calls and declarations, e.g. ``function fight() { ... }``
- Set off operators with spaces, e.g. ``var x = 2 + 2;``
- No whitespace at the end of line or on blank lines.
- Lines should be no longer than 120 characters. There are 2 exceptions, both allowing the line to exceed 120 characters:
    - If the line contains a comment with a long URL.
    - If the line contains a regex literal. This prevents having to use the regex constructor which requires otherwise
      unnecessary string escaping.
- End files with a single newline character.


Use indentation when making long method chains. Use a leading dot, which
emphasises that the line is a method call, not a new statement.

.. code-block:: javascript

    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // bad
    $('#items').
        find('.selected').
            highlight().
            end().
        find('.open').
            updateCount();

    // good
    $('#items')
        .find('.selected')
            .highlight()
            .end()
        .find('.open')
            .updateCount();

Leave a blank line after blocks and before the next statement

.. code-block:: javascript

    // bad
    if (foo) {
        return bar;
    }
    return baz;

    // good
    if (foo) {
        return bar;
    }

    return baz;

    // bad
    var obj = {
        foo: function() {
        },
        bar: function() {
        }
    };
    return obj;

    // good
    var obj = {
        foo: function() {
        },

        bar: function() {
        }
    };

    return obj;

Use newlines to group logically related pieces of code. For example:

.. code-block:: javascript

    doSomethingTo(x);
    doSomethingElseTo(x);
    andThen(x);

    nowDoSomethingWith(y);

    andNowWith(z);


Commas
------

- Leading commas: God, **no**!
- Additional trailing comma: **No**

.. code-block:: javascript

    // bad
    var hero = {
        firstName: 'Kevin',
        lastName: 'Flynn',
    };

    var heroes = [
        'Batman',
        'Superman',
    ];

    // good
    var hero = {
        firstName: 'Kevin',
        lastName: 'Flynn'
    };

    var heroes = [
        'Batman',
        'Superman'
    ];


Semicolons
----------

Yes, always.

.. code-block:: javascript

    // bad
    (function () {
        var name = 'Skywalker'
        return name
    })()

    // good
    (function () {
        var name = 'Skywalker';
        return name;
    })();

    // good (guards against the function becoming an argument when two files
    // with IIFEs are concatenated) this should not happen if the previous
    // example is enforced, but sometimes we have no control over vendor code
    ;(function () {
        var name = 'Skywalker';
        return name;
    })();


Variables
=========


General
-------

Always use var to declare variables. Not doing so will result in global
variables. We want to avoid polluting the global namespace

Assign variables at the top of their scope. This helps avoid issues with
variable declaration and assignment hoisting related issues.

Use one var declaration per variable. It's easier to add new variable
declarations this way, and you never have to worry about swapping out
a ``;`` for a ``,`` or introducing punctuation-only diffs.

.. code-block:: javascript

    // bad
    var items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // bad
    // (compare to above, and try to spot the mistake)
    var items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // good
    var items = getItems();
    var goSportsTeam = true;
    var dragonball = 'z';


Objects
-------

Use the literal syntax for object creation.

.. code-block:: javascript

    // bad
    var item = new Object();

    // good
    var item = {};


Don't use `reserved words <http://es5.github.io/#x7.6.1>`_ as keys.

.. code-block:: javascript

    // bad
    var superman = {
        default: { clark: 'kent' },
        private: true
    };

    // good
    var superman = {
        defaults: { clark: 'kent' },
        hidden: true
    };

Do not use quotes for properties, it is only needed for screening reserved
words which we are not supposed to use.


Arrays
------

Use the literal syntax for array creation.

.. code-block:: javascript

    // bad
    var items = new Array();

    // good
    var items = [];

Use ``Array#push`` instead of direct assignment to add items to an array.

.. code-block:: javascript

    var someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');

To convert an array-like object to an array, use ``Array#slice``.
If you need to copy an array, use slice as well.

.. code-block:: javascript

    function trigger() {
        var args = Array.prototype.slice.call(arguments);
        ...
    }

.. code-block:: javascript

    var length = items.length;
    var itemsCopy = [];
    var index;

    // bad
    for (index = 0; index < length; index++) {
        itemsCopy[index] = items[index];
    }

    // good
    itemsCopy = items.slice();


Strings
-------

Use single-quotes for strings. When programmatically building a string
use ``Array#join`` instead of string concatenation

.. code-block:: javascript

    // bad
    var template = '<div class="whatever">' +
        message +
    '</div>';

    // good
    var template = [
        '<div class="whatever">',
            message,
        '</div>'
    ].join('');

If you have a complicated string buildup it's always better to use javascript
templating instead. That way templates could have their own files with proper
syntax highlighting and pre-compilation build step.


Functions
---------

Function expressions:

.. code-block:: javascript

    // anonymous function expression
    var anonymous = function () {
        return true;
    };

    // named function expression
    var named = function named() {
        return true;
    };

    // immediately-invoked function expression (IIFE)
    (function () {
        console.log('Welcome to the Internet. Please follow me.');
    })();

Tend to avoid anonymous function expressions, try to always use named ones,
it will save you a lot of pain going through stack traces and debugging in
general.

Never declare a function in a non-function block (if, while, etc). Assign
the function to a variable instead. Browsers will allow you to do it, but
they all interpret it differently, which is really bad news.

.. code-block:: javascript

    // bad
    if (currentUser) {
        function test() {
            console.log('Nope.');
        }
    }

    // good
    var test;
    if (currentUser) {
        test = function test() {
            console.log('Yup.');
        };
    }

Never name a parameter arguments. This will take precedence over the arguments
object that is given to every function scope. It is also a
`reserved word <http://es5.github.io/#x7.6.1>`_.

.. code-block:: javascript

    // bad
    function nope(name, options, arguments) {
        // ...stuff...
    }

    // good
    function yup(name, options, args) {
        // ...stuff...
    }

Prefer early returns.

.. code-block:: javascript

    // bad
    function returnLate(foo) {
        var value;

        if (foo) {
            value = 'foo';
        } else {
            value = 'quux';
        }
        return value;
    }

    // good

    function returnEarly(foo) {
        if (foo) {
            return 'foo';
        }

        return 'quux';
    }

.. code-block:: javascript

    // bad
    function doThingsWithComponent(element) {
        if (element.length) {
            // do things
        }
    }

    // good
    function doThingsWithComponent(element) {
        if (!element.length) {
            return false;
        }

        // do things
    }


Functions context
-----------------

Prefer ``Function#bind`` over ``$.proxy(function (), scope)``.

.. code-block:: javascript

    doAsync(function () {
        this.fn();
    }.bind(this));

If the context argument is available, it is preferred.

.. code-block:: javascript

    // bad
    [1, 2, 3].forEach(function (number) {
        this.fn(number);
    }.bind(this));

    // good
    [1, 2, 3].forEach(function (number) {
        this.fn(number);
    }, this);

If assigning the current context to a variable, the variable should be named
``that``:

.. code-block:: javascript

    var that = this;
    doAsync(function () {
        that.fn();
    });


Properties
----------

Use dot notation when accessing properties.

.. code-block:: javascript

    var luke = {
        jedi: true,
        age: 28
    };

    // bad
    var isJedi = luke['jedi'];

    // good
    var isJedi = luke.jedi;

Use subscript notation ``[]`` **only** when accessing properties with a variable.

.. code-block:: javascript

    var luke = {
        jedi: true,
        age: 28
    };

    function getProp(prop) {
        return luke[prop];
    }

    var isJedi = getProp('jedi');


Hoisting
--------

Variable declarations get hoisted to the top of their scope, but their
assignment does not.

.. code-block:: javascript

    // we know this wouldn't work (assuming there
    // is no notDefined global variable)
    function example() {
        console.log(notDefined); // => throws a ReferenceError
    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example() {
        console.log(declaredButNotAssigned); // => undefined
        var declaredButNotAssigned = true;
    }

    // The interpreter is hoisting the variable
    // declaration to the top of the scope,
    // which means our example could be rewritten as:
    function example() {
        var declaredButNotAssigned;
        console.log(declaredButNotAssigned); // => undefined
        declaredButNotAssigned = true;
    }

Anonymous function expressions hoist their variable name, but not the
function assignment.

.. code-block:: javascript

    function example() {
        console.log(anonymous); // => undefined

        anonymous(); // => TypeError anonymous is not a function

        var anonymous = function() {
            console.log('anonymous function expression');
        };
    }

Named function expressions hoist the variable name, not the function name or
the function body.

.. code-block:: javascript

    function example() {
        console.log(named); // => undefined

        named(); // => TypeError named is not a function

        superPower(); // => ReferenceError superPower is not defined

        var named = function superPower() {
            console.log('Flying');
        };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example() {
        console.log(named); // => undefined

        named(); // => TypeError named is not a function

        var named = function named() {
            console.log('named');
        }
    }

Function declarations hoist their name and the function body.

.. code-block:: javascript

    function example() {
        superPower(); // => Flying

        function superPower() {
            console.log('Flying');
        }
    }

For more information on hoisting refer to `JavaScript Scoping & Hoisting
<http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html>`_  by
`Ben Cherry <http://www.adequatelygood.com>`_.


Types
=====


Type Casting and Coercion
-------------------------

Strings:

.. code-block:: javascript

    //  => this.reviewScore = 9;

    // bad
    var totalScore = this.reviewScore + '';

    // good
    var totalScore = '' + this.reviewScore;

    // bad
    var totalScore = '' + this.reviewScore + ' total score';

    // good
    var totalScore = this.reviewScore + ' total score';

Numbers:
Use parseInt for ``Numbers`` and always with a radix for type casting.

.. code-block:: javascript

    var inputValue = '4';

    // very bad
    var val = new Number(inputValue);

    // bad
    var val = +inputValue;

    // bad
    var val = inputValue >> 0;

    // bad
    var val = parseInt(inputValue);

    // ok
    var val = Number(inputValue);

    // good
    var val = parseInt(inputValue, 10);

Booleans:

.. code-block:: javascript

    var age = 0;

    // bad
    var hasAge = new Boolean(age);

    // ok
    var hasAge = Boolean(age);

    // good
    var hasAge = !!age;


Comparison Operators & Equality
-------------------------------

Use ``===`` and ``!==`` over ``==`` and ``!=``.

Comparison operators are evaluated using coercion with the ToBoolean method
and always follow these simple rules:

- **Objects** evaluate to **true**
- **Undefined** evaluates to **false**
- **Null** evaluates to **false**
- **Booleans** evaluate to the **value of the boolean**
- **Numbers** evaluate to **false** if **+0**, **-0**, or **NaN**, otherwise **true**
- **Strings** evaluate to **false** if an empty string '', otherwise **true**

.. code-block:: javascript

    if ([0]) {
        // true
        // An array is an object, objects evaluate to true
    }

- Use shortcuts.

.. code-block:: javascript

    // bad
    if (name !== '') {
      // ...stuff...
    }

    // good
    if (name) {
      // ...stuff...
    }

    // bad
    if (collection.length > 0) {
      // ...stuff...
    }

    // good
    if (collection.length) {
      // ...stuff...
    }

 More info in `Javascript Equality Table <https://dorey.github.io/JavaScript-Equality-Table/>`_

- Condition statements should not contain assignment operations:

.. code-block:: javascript

    // bad
    var foo;
    if ((foo = bar()) > 0) {
        // ...
    }

    // good
    var foo = bar();
    if (foo > 0) {
        // ...
    }

- Logical operators should not be used for conditional branching:

.. code-block:: javascript

    // bad
    condition && actionIfTrue() || actionIfFalse();

    // good
    if (condition) {
        actionIfTrue();
    } else {
        actionIfFalse();
    }

- Conditions longer than the maximum line length should be divided as in the example:

.. code-block:: javascript

    // good
    if (longCondition ||
        anotherLongCondition &&
        yetAnotherLongCondition
    ) {
        // ...
    }

- The ternary operator should be written as in the examples:

.. code-block:: javascript

    var x = a ? b : c;

    var y = a ?
        longButSimpleOperandB : longButSimpleOperandC;

    var z = a ?
        moreComplicatedB :
        moreComplicatedC;

- If a statement is longer than the maximum line length, it is split into
  several lines and properly indented.
- Closing parentheses should be on a new line with the indentation of the
  current block statement. Tend to do the same with object properties.

.. code-block:: javascript

    DoSomethingThatRequiresALongFunctionName(
        veryLongArgument1,
        argument2,
        argument3,
        argument4
    );
    anotherStatement;

jQuery
======


Variables
---------

Do not prefix jQuery variables with ``$``.
Always cache jQuery lookups.

.. code-block:: javascript

    // bad
    function setSidebar() {
        $('.sidebar').hide();
        $('.sidebar').css({
            'background-color': 'pink'
        });
    }

    // bad
    function setSidebar() {
        var $sidebar = $('.sidebar');
        $sidebar.hide();
        $sidebar.css({
            'background-color': 'pink'
        });
    }

    // good
    function setSidebar() {
        var sidebar = $('.sidebar');
        sidebar.hide();
        sidebar.css({
            'background-color': 'pink'
        });
    }

Ajax
----

Prefer promise based ``$.ajax`` calls over callback passing into settings object.

.. code-block:: javascript

    // bad
    $.ajax('/url', {
        dataType: 'json',
        success: function () {
        },
        error: function () {
        },
        complete: function () {
        }
    });

    // good
    $.ajax({
        urls: '/url',
        dataType: 'json',
    }).done(function myAjaxDone () {
        ...
    }).fail(function myAjaxFailed () {
        ...
    }).always(function myAjaxIsCompleted () {
        ...
    });

The nice thing about this is that the return value of ``$.ajax`` is now a deferred promise that can be bound to
anywhere else in your application. So let's say you want to make this ajax call from a few different places.
Rather than passing in your success function as an option to the function that makes this ajax call, you can just have
the function return $.ajax itself and bind your callbacks with done, fail, then, or whatever. Note that ``always``
is a callback that will run whether the request succeeds or fails. ``done`` will only be triggered on success.

It is also easier to process when you need to pass multiple success callbacks with few chained `.done` calls (which can
also be conditional) than passing array of functions into ``success`` property.

.. code-block:: javascript

    ...
    getItems: function getItems(options) {
        var opts = $.extend({
            url: '/items/',
            dataType: 'json',
            ...
        }, options);
        return $.ajax(opts);
    }
    ...

    // and then in the app
    this.getItems().done(function (products) {
        ...
    })

    // and in all the different places
    this.getItems({ url: '/items/categories/12' }).done(function (products) {
        ...
    });


Common patterns
===============


Loops
-----

Use ``for-in`` only for iterating over keys in an ``Object``, never over an ``Array``.


Naming conventions
------------------

Refer to guidelines. Use leading underscore to denote private methods/properties.
The only place where it's allowed to use single letter variable is in event callbacks:

.. code-block:: javascript

    // bad
    $('div.elem').on('click', function (clickEvent) {
        ...
    });

    // good
    $('.js-element').on('click', function (e) {
        ...
    });


Events
------

When attaching data payloads to events (whether DOM events or something more
proprietary like Backbone events), pass a hash instead of a raw value.
This allows a subsequent contributor to add more data to the event payload
without finding and updating every handler for the event. For example, instead of:

.. code-block:: javascript

    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
        // do something with listingId
    });

prefer:

.. code-block:: javascript

    // good
    $(this).trigger('listingUpdated', { listingId: listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
        // do something with data.listingId
    });


Templates
---------

When passing data to JS templates (using underscore.js / window.tmpl by J. Resig) -
always pass an object that has only one property, and that property is the data you need.

Consider this template:

.. code-block:: html

    <% if (people) { %>
       <%= people %>
    <% } %>

.. code-block:: javascript

    // bad
    var markup = tmpl(template, { prop1: true, prop2: '1' });

This will throw a ReferenceError because these template engines use
``with`` underneath. Instead do this:

.. code-block:: html

    <% if (addon.people) { %>
       <%= addon.people %>
    <% } %>

.. code-block:: javascript

    // good
    var markup = tmpl(template, {
        addon: {
            prop1: true,
            prop2: '1'
        }
    });

You will have explicit scope without any unexpected behaviours.


Classes
-------

It is a common pattern when creating javascript components to save all the ui
elements under a common namespace. It is also a common mistake to declare an
object called ``ui`` on a class.

.. code-block:: javascript

    // bad
    var Widget = new Class({
        ui: {
            oneElement: null,
            anotherElement: null
        },
        initialize: function (container, options) {
            this._buildUI(container);
        },
        _buildUI: function (container) {
            this.container = $(container);

            // another bad thing
            this.ui.oneElement = $('.js-one-element');
            this.ui.anotherElement = $('.js-another-element');
        }
    });

There are several problems. The ``ui`` object is declared on prototype in this
case, and as with all complex types is javascript we are working with a
reference to the value. That means that the same ui object will be shared across
all instances of the class, which in turn will mean that you won't be able to
use several instances on the page.

.. code-block:: javascript

    // good
    var Widget = new Class({
        initialize: function (container, options) {
            this._buildUI(container);
        },
        _buildUI: function (container) {
            this.container = $(container);
            this.ui = {
                // scoping widget's moving parts under the same container is a good pattern as well
                oneElement: $('.js-one-element', this.container),
                anotherElement: $('.js-another-element', this.container)
            };
        }
    });

We do not always know how the widget will be used. Even if "it's only gonna
be on this page and it's gonna be this particular instance" seems like a valid
reason not to change - it never is. We should always strive for making
components independent and reusable, it's usually not a big effort
(especially if you think about before writing the widget) and it can solve a
lot of problems for you in the future.


Passing data to components
--------------------------

Avoid instantiating components in inline scripts. Instead pass the data to
the components through data attributes.

Avoid spreading options into multiple data attributes, as it might happen
that two different javascript components live on the same DOM node and require
an option with the same name. Instead use json notation.

**Bad**:

.. code-block:: django

    <div class="js-component-1 js-component-2"
        data-something="false" {# for component 2 #}
        data-value="for component 1"
        data-value="for component 2"> {# aw maaan #}
        Sad panda :(
    </div>

Imagine in this case component 1 functionality is significantly affected by an
option that is meant for component 2. Also if they share the same option
property name, such as value - sad panda.

**Good**:

.. code-block:: django

    <div class="js-component-first js-component-second"
        data-component-first='{
            "value": "for component 1"
        }'
        data-component-second='{
            "value": "for component 2",
            "something": false
        }'>
        Happy panda!
    </div>

Passing the data to the components is also very straightforward. This way you
have the same initialisation method for all existing instances of the widget
even if they have different options.

.. code-block:: javascript

    var componentElements = $('.js-component-2');
    var defaults = {
        x: 0,
        y: 0,
        something: true
    };
    componentElements.each(function () {
        var componentElement = $(this);
        var options = $.extend({}, defaults, componentElement.data('component-second'));
        new ComponentSecond(componentElement, options);
    }):


Magic numbers
-------------

- Avoid magic numbers. Try to parametrise or use constants.

.. code-block:: javascript

    // bad
    setTimeout(function () {
        if (failed && count < 5) {
            count++;
            return;
        }
        // or do stuff
    }, 3000);

    // better
    var POLLING_TIMEOUT = 3000;
    var MAX_FAILURES_COUNT = 5;

    setTimeout(function () {
        if (failed && count < MAX_FAILURES_COUNT) {
            count++;
            return;
        }
        // or do stuff
    }, POLLING_TIMEOUT);


.. code-block:: javascript

    switch (e.keyCode) {
        case keyCodes.ENTER:
        case keyCodes.SPACE:
            x();
            break;
        case keyCodes.TAB
        case keyCodes.ESCAPE:
            y();
            break;
        default:
            z();
    }


ECMAScript 5
============

Use where appropriate. Use array methods for working with arrays, but don't
use them when working with array-like objects such as jQuery collections.
For them use ``$.fn.each`` instead.

Prefer ``Array#forEach`` over ``for () {}`` loop.

.. code-block:: javascript

    var fighters = [
        {
            name: 'Jonny Cage',
            dead: true
        },
        {
            name: 'Kung Lao',
            dead: true
        },
        {
            name: 'Raiden',
            dead: false
        }
    ];

    // bad
    var i;
    var l = fighters.length;

    for (; i < l; i++) {
        console.log(fighters[i].name + ' ' + (fighters[i].dead ? 'lost' : 'did not lose'));
    }

    // good
    fighters.forEach(function (fighter) {
        console.log(fighter.name + ' ' + (fighter.dead ? 'lost' : 'did not lose'));
    });


More info on ES5 compatibility `here <http://kangax.github.io/compat-table/es5/>`_
