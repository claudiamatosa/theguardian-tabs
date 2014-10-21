'use strict';

angular.module('theGuardianTabsApp.tabs.tabs-directive', [])

	.directive('tgTabs', [function() {
    
    var settings = {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'components/tabs/tabs.html'
    };

    return settings;
  }]);