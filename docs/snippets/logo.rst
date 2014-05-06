Logo
====

Markup
******

.. code-block:: html

    <h1 class="logo-main">
        <a href="/"><img src="img/logo-main.png" alt="Company" /></a>
    </h1>

* The **h1** element should be positioning the logo.
* The **a** tag serves as background holder, there you can add the correct background image and if needed the retina
  alternative.
* The **img** is a fallback for print and the no-css view. Mostly it is a helper for accessibility purposes.


Style
*****

.. code-block:: scss

    .logo-main { position:absolute; left:10px; top:10px; z-index:100;
        a { display:block; width:200px; height:50px;
            background:url('../img/logo-main.png') no-repeat left top;
            @include hide-text();
        }
    }
