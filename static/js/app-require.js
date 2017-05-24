/* 加载需要用到的WEB页面 */

require.config({
    baseUrl: './',
    waitSeconds: 60,
    urlArgs: 'V2.1.01.21.1',
    paths: {
        'jquery': 'vendor/jquery/jquery.min',
        'angular': 'vendor/angular/angular',
        'angular-animate': 'vendor/angular/angular-animate/angular-animate',
        'angular-cookies': 'vendor/angular/angular-cookies/angular-cookies',
        'angular-resource': 'vendor/angular/angular-resource/angular-resource',
        'angular-sanitize': 'vendor/angular/angular-sanitize/angular-sanitize',
        'angular-touch': 'vendor/angular/angular-touch/angular-touch',
        'angular-ui-router': 'vendor/angular/angular-ui-router/angular-ui-router',
        'ngStorage': 'vendor/angular/ngstorage/ngStorage',
        'ui-bootstrap-tpls': 'vendor/angular/angular-bootstrap/ui-bootstrap-tpls',
        'ocLazyLoad': 'vendor/angular/oclazyload/ocLazyLoad',
        'angular-translate': 'vendor/angular/angular-translate/angular-translate',
        'loader-static-files': 'vendor/angular/angular-translate/loader-static-files',
        'storage-cookie': 'vendor/angular/angular-translate/storage-cookie',
        'storage-local': 'vendor/angular/angular-translate/storage-local',
        'app-main':'js/main',
        'app': 'js/app',
        'js-config':'js/config',
        'js-config-lazyload':'js/config.lazyload',
        'js-config-router':'js/config.router',
        'js-ui-load':'js/services/ui-load',
        'js-fromNow':'js/filters/fromNow',
        'js-setnganimate':'js/directives/setnganimate',
        'js-ui-butterbar':'js/directives/ui-butterbar',
        'js-ui-focus':'js/directives/ui-focus',
        'js-ui-fullscreen':'js/directives/ui-fullscreen',
        'js-ui-jq':'js/directives/ui-jq',
        'js-ui-module':'js/directives/ui-module',
        'js-ui-nav':'js/directives/ui-nav',
        'js-ui-scroll':'js/directives/ui-scroll',
        'js-ui-shift':'js/directives/ui-shift',
        'js-ui-toggleclass':'js/directives/ui-toggleclass',
        'js-ui-validate':'js/directives/ui-validate',
        'bootstrap':'js/controllers/bootstrap',
        'requirejs-domReady': 'vendor/requirejs-domReady/domReady',
        'utils': 'js/common/utils',
        'underscore': 'vendor/underscore/underscore-min'
},
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'ngStorage': {
            deps: ['angular']
        },
        'ui-bootstrap-tpls': {
            deps: ['angular']
        },
        'ocLazyLoad': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'loader-static-files': {
            deps: ['angular', 'angular-translate']
        },
        'storage-cookie': {
            deps: ['angular', 'angular-translate']
        },
        'storage-local': {
            deps: ['angular', 'angular-translate']
        },
        'app-main': {
            deps:['jquery', 'angular']
        },
        'js-ui-jq': {
            deps: ['jquery', 'angular', 'js-ui-load']
        },
        'utils': {
            deps: ['jquery', 'underscore'],
            exports: 'WMS'
        }
    }
});

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
    'app',
    'app-main',
    'js-config',
    'js-config-lazyload',
    'js-config-router',
    'js-ui-load',
    'js-fromNow',
    'js-setnganimate',
    'js-ui-butterbar',
    'js-ui-focus',
    'js-ui-fullscreen',
    'js-ui-jq',
    'js-ui-module',
    'js-ui-nav',
    'js-ui-scroll',
    'js-ui-shift',
    'js-ui-toggleclass',
    'js-ui-validate',
    'bootstrap',
    'js/common/directive',
    'js/common/const',
    'js/common/wmsDataSource',
], function (require, angular) {
    'use strict';
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
});

