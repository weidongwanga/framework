'use strict';

/* Filters */
// need load the moment.js to use this filter.
define(['app', 'angular'], function(app, angular) {
app
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });});