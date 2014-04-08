/*!
 * E-Mail encrypte
 * @version: 0.4.2
 * @param: autoConvert (converts innerHtml to match the email address)
 * @param: attribute (attribute from which the domain name is catched)
 * @example: <a href="#info" rel="divio.ch" class="mailcrypte">E-Mail</a>
 */
$.fn.mailCrypte = function (options) {
    'use strict';

    options = $.extend({
        'autoConvert': true,
        'attribute': 'data-rel'
    }, options);

    return this.each(function () {
        var mailto = 'mailto:' + $(this).attr('href').replace('#', '') + '@' + $(this).attr(options.attribute);

        $(this).attr('href', mailto);

        if(options.autoConvert) { $(this).html(mailto.replace('mailto:', '')); }
    });
};

/*!
 * Pop-Up Generator
 * @version: 0.3.1
 * @param: width (initial width)
 * @param: height (initial height)
 * @example: <a href="http://www.google.ch" class="popup">Open Pop-Up</a>
 */
$.fn.autoPopUp = function (options) {
    'use strict';

    options = $.extend({
        'width': 750,
        'height': 500
    }, options);

    return this.each(function () {
        var el = $(this);
        var url = el.attr('href');
        var width = el.data('width') || options.width;
        var height = el.data('height') || options.height;

        el.bind('click', function (e) {
            e.preventDefault();
            window.open(url, '_blank', 'width=' + width + ',height=' + height + ',status=yes,scrollbars=yes,resizable=yes');
        });
    });
};

/*!
 * Auto input fill-in
 * @version: 0.6.7
 * @param: label (if true than labeltext on parent else rel attribut on this)
 * @param: strip (replacement text)
 * @param: add (add additional information)
 */
$.fn.fieldLabel = function (options) {
    'use strict';

    options = $.extend({
        'label': false,
        'strip': '',
        'add': ''
    }, options);

    function show(el, label) {
        if(el.attr('value') !== '') { return false; }
        el.attr('value', label);

        return true;
    }

    function hide(el, e, label) {
        if(e.type === 'blur' && el.attr('value') === label) { return false; }
        el.attr('value', '');

        return true;
    }

    return this.each(function () {
        var label = (options.label) ? $(this).parent().find('label').text() : $(this).attr('placeholder');
        label = label.replace(options.strip, '');
        label += options.add;

        if($(this).attr('value') === '') { $(this).attr('value', label); }

        $(this).bind('click', function (e) {
            if($(this).attr('value') === label) { hide($(this), e, label); }
        });

        $(this).bind('blur', function (e) {
            ($(this).attr('value') === label) ? hide($(this), e, label) : show($(this), label);
        });
    });
};