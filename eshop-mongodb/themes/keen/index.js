exports.install = function () {
    F.merge('/keen/css/default.css', '=keen/public/css/components.css','=keen/public/css/slider.css','=keen/public/css/style-shop.css','=keen/public/css/style.css','=keen/public/css/style-responsive.css','=keen/public/css/themes/red.css','=keen/public/css/custom.css' , '=keen/public/css/default.css');
    F.merge('/keen/js/default.js', '=keen/public/js/back-to-top.js', '=keen/public/js/layout.js', '/js/jctajr.min.js', '/js/ui.js', '=keen/public/js/default.js');
};



