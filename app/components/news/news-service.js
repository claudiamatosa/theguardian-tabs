'use strict';

angular.module('theGuardianTabsApp.news.news-service', [])

	.factory('newsProvider', ['$http', function($http) {
	
        return function (section) {
            var data = {
                'api-key': 'test',
                'show-fields': 'webTitle,trailText,webUrl,webPublicationDate',
                'section': section
            };

            return $http({
		    	method: 'GET',
		    	url: 'http://content.guardianapis.com/search',
		    	params: data
		    });
        };
	}]);