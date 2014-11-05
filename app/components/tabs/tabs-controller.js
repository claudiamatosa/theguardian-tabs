'use strict';

angular.module('theGuardianTabsApp.tabs.tabs-controller', [])

    .value('TABS', [
        {
            type: 'news',
            id: 'uk-news',
            name: 'UK News',
            zone: 'news'
        },

        {
            type: 'news',
            id: 'football',
            name: 'Football',
            zone: 'sports'
        },

        {
            type: 'news',
            id: 'travel',
            name: 'Travel',
            zone: 'travel'
        }
    ])

	.controller('TabsCtrl', ['$scope', 'TABS', function($scope, TABS) {
        var tabsController = this,
            firstTab = TABS[0];
        
        this.tabs = TABS;
                
        this.openTab = function (tab) {
            $scope.$emit('tabChanged-' + tab.type, tab.id);
            this.activeTab = tab.id;
        };
        
        /**
         * Open the first tab at start
         */
        setTimeout(function(){
            $scope.$apply(function(){
                tabsController.openTab(firstTab);
            });
        }, 1000);
        
	}]);