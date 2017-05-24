'use strict';

define([
    'require',
    'angular',
    'angular-animate',
    'angular-cookies',
    'angular-resource',
    'angular-sanitize',
    'angular-touch',
    'angular-ui-router',
    'ngStorage',
    'ui-bootstrap-tpls',
    'ocLazyLoad',
    'angular-translate',
    'loader-static-files',
    'storage-cookie',
    'storage-local',
    'js-ui-load',
    'js-ui-jq',
    'js-ui-validate'
], function(requeire, angular) {
    "use strict";
    return angular.module('app', ['ngAnimate', 'ngCookies',
        'ngResource', 'ngSanitize', 'ngTouch','ngStorage',
        'ui.router', 'ui.bootstrap', 'ui.load', 'ui.jq', 'ui.validate', 'oc.lazyLoad',
        'pascalprecht.translate']);

});
//
//angular.module('app', [
//    'ngAnimate',
//    'ngCookies',
//    'ngResource',
//    'ngSanitize',
//    'ngTouch',
//    'ngStorage',
//    'ui.router',
//    'ui.bootstrap',
//    'ui.load',
//    'ui.jq',
//    'ui.validate',
//    'oc.lazyLoad',
//    'pascalprecht.translate'
//]);