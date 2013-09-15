/**
* Filter module for including basic filter sets
* Chain module to working app in AppConfig
**/
angular.module('filterSet01', []).filter('checkmark', function() {

  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
  
});