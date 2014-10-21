'use strict';

angular.module('theGuardianTabsApp.tabs.tabs-controller', [])

	.controller('TabsCtrl', ['$scope', '$rootScope', 'newsProvider', function($scope, $rootScope, newsProvider) {
        var tabsController = this;
        
        /**
         * Error message when fetching the data / malformed data (not used for the moment)
         */
        this.apiError = function () {
            $scope.errorMessage = "Failed to load resource.";
        };
        
        /**
         * This should be in a controller in
         * the news component
         */
        this.fetchNews = function (section) {
            newsProvider(section)
                .success(function(data) {
                    if (data && data.response && data.response.results) {
                        $rootScope.news = data.response.results;
                    } else {
                        this.apiError();
                    }
                })
                .error(function() {
                    this.apiError();
                });
        };
        
        /**
         * Current tabs
         * 
         * TODO: store it somewhere else
         */
        $scope.tabs = [
            {
                id: 'uk-news',
                name: 'UK News',
                zone: 'news'
            },
            
            {
                id: 'football',
                name: 'Football',
                zone: 'sports'
            },
            
            {
                id: 'travel',
                name: 'Travel',
                zone: 'travel'
            }
        ];            
                
        $scope.openTab = function (section) {
            tabsController.fetchNews(section);
        };
        
        /**
         * Open the news tab at start
         */
        $scope.openTab('news');

        /**
         * Return internal methods for testing
         */
        return this;
	}]);