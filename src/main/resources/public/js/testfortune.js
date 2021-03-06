
requirejs.config({
    baseUrl: '/js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'lib/jquery',
        backbone: 'lib/backbone'
    },
    shim: {
        'backbone': {
            deps: ['lib/underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

requirejs(["lynn-backbone"], function(Lynn) {
    console.log("Hello!");
    var symbols = new Lynn.GalleryCollection();
    var galleryView = new Lynn.GalleryView({collection: symbols});
});
