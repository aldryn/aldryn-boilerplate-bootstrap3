Forms
=====

Markup
******

.. code-block:: html

    <form action="." method="post" class="form form-example" role="form">
        <fieldset>
            <ol>
                <!-- block example -->
                <li class="item">
                    <label class="label" for="field-name">Name</label>
                    <div class="field">
                        <input type="text" id="field-name" class="input-text" />
                    </div>
                </li>
                <!-- inline example -->
                <li class="item">
                    <div class="label"><span class="visuallyhidden">Name</span></div>
                    <div class="field">
                        <label><input type="text" class="input-text" /></label>
                    </div>
                </li>
                <!-- multiple elements example -->
                <li class="item">
                    <div class="label">Name</div>
                    <div class="field">
                        <ol>
                            <li><label><input type="checkbox" class="input-radiocheck" /> Apple</label></li>
                            <li><label><input type="checkbox" class="input-radiocheck" /> Orange</label></li>
                            <li><label><input type="checkbox" class="input-radiocheck" /> Banana</label></li>
                            <li><label><input type="checkbox" class="input-radiocheck" /> Peach</label></li>
                        </ol>
                    </div>
                </li>
            </ol>
        </fieldset>

        <!-- button example -->
        <fieldset>
            <ol>
                <li>
                    <div class="label"><!-- no text required --></div>
                    <div class="field">
                        <label><input type="submit" class="btn" value="Submit" /></label>
                    </div>
                </li>
            </ol>
        </fieldset>
    </form>

We need to ensure that a label is always associated with an input element. Whenever this is not possible we should
use a div with the class ``.label`` to style it as label.

Use the ``fieldset`` element to create a grid and separate blocks where required. For example
``<fieldset class="large-12 column"> ... </fieldset>``.

Detailed information about the inner form elements can be found on the styleguide:
http://standardsite-dev.divio.ch/en/styleguide/#page-forms

