'use strict';

angular.module('theGuardianTabsApp.news.news-controller', [])

    .value('NEWS_LIMIT', 10)

    .value('TAB_TYPE', 'news')

	.controller('NewsCtrl', ['$rootScope', 'headlinesAPI', 'NEWS_LIMIT', 'TAB_TYPE', function($rootScope, headlinesAPI, NEWS_LIMIT, TAB_TYPE) {
        var newsController = this;
        
        this.errorMessage = null;
        
        this.tabsLoaded = false;
        
        /**
         * Error message when fetching the data / malformed data
         */
        this.apiError = function () {
            newsController.errorMessage = "Failed to load resource.";
        };

        this.fetchNews = function (section) {
            headlinesAPI(section, NEWS_LIMIT)
                .success(function(data) {
                    if (data && data.response && data.response.results) {
                        newsController.articles = data.response.results;
                        newsController.errorMessage = null; 
                    } else {
                        newsController.apiError();
                    }
                })
                .error(function() {
                    newsController.apiError();
                })
                .then(function () {
                    newsController.tabsLoaded = true;
                });
        };
        
        $rootScope.$on('tabChanged-' + TAB_TYPE, function (event, section) {
            newsController.fetchNews(section);
        });
	}]);