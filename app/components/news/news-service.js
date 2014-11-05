'use strict';

angular.module('theGuardianTabsApp.news.news-service', [])

	.factory('headlinesAPI', ['$http', function($http) {
	
        return function (section, limit) {
            var data = {
                'api-key': 'test',
                'show-fields': 'webTitle,trailText,webUrl,webPublicationDate',
                'section': section,
                'page-size': limit
            };

            return $http({
		    	method: 'GET',
		    	url: 'http://content.guardianapis.com/search',
		    	params: data
		    });
        };
	}]);