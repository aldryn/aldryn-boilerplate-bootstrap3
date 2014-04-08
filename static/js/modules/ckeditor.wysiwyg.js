/* Default CKEDITOR Styles
 * Added within src/settings.py CKEDITOR_SETTINGS.stylesSet
 */

CKEDITOR.stylesSet.add('default', [
    /* Block Styles */
    {'name': 'Text Lead', 'element': 'p', 'attributes': {'class': 'lead'}},
    {'name': 'Text Legal', 'element': 'p', 'attributes': {'class': 'legal'}},

    {'name': 'Align Left', 'element': ['p','h1','h2','h3','h4','h5','h6','div'], 'attributes': {'class': 'text-left'}},
    {'name': 'Align Center', 'element': ['p','h1','h2','h3','h4','h5','h6','div'], 'attributes': {'class': 'text-center'}},
    {'name': 'Align Right', 'element': ['p','h1','h2','h3','h4','h5','h6','div'], 'attributes': {'class': 'text-right'}},

    /* Inline Styles */
    {'name': 'Color Muted', 'element': 'span', 'attributes': {'class': 'text-muted'}},
    {'name': 'Color Info', 'element': 'span', 'attributes': {'class': 'text-info'}},
    {'name': 'Color success', 'element': 'span', 'attributes': {'class': 'text-success'}},
    {'name': 'Color warning', 'element': 'span', 'attributes': {'class': 'text-warning'}},
    {'name': 'Color error', 'element': 'span', 'attributes': {'class': 'text-error'}},

    {'name': 'Button', 'element': 'a', 'attributes': {'class': 'btn'}},

    {'name': 'Image Left', 'element': 'span', 'attributes': {'class': 'image-left'}},
    {'name': 'Image Right', 'element': 'span', 'attributes': {'class': 'image-right'}},
    {'name': 'Image Responsive', 'element': 'span', 'attributes': {'class': 'image-responsive'}},

    {'name': 'Size 16', 'element': 'span', 'attributes': {'class': 'size-16'}},
    {'name': 'Size 18', 'element': 'span', 'attributes': {'class': 'size-18'}},
    {'name': 'Size 20', 'element': 'span', 'attributes': {'class': 'size-20'}},
    {'name': 'Size 24', 'element': 'span', 'attributes': {'class': 'size-24'}},
    {'name': 'Size 28', 'element': 'span', 'attributes': {'class': 'size-28'}},
    {'name': 'Size 32', 'element': 'span', 'attributes': {'class': 'size-32'}}
]);