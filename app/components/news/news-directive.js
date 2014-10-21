'use strict';

angular.module('theGuardianTabsApp.news.news-directive', [])

	.directive('tgNews', [function() {
    
    var settings = {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'components/news/news.html'
    };

    return settings;
  }]);