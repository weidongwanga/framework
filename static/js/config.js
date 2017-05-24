// config
define(['app', 'angular'], function(app, angular) {
var app =  
app
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
        $translateProvider.preferredLanguage();
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }]);});
define(function(){
//   window.BASEPATH = "http://192.168.118.127:8080";
    window.BASEPATH = "http://localhost:8080";
//      window.BASEPATH = "http://192.168.119.77:8080";
//    window.BASEPATH = "http://test.wms.meilishuo.com";
//    window.BASEPATH = "http://192.168.118.7:8080";
});