/**
 * Load dependencies
 */
$script([
    'vendor/angular/angular.js',
    'app.js',
    'components/news/news.js',
    'components/news/news-service.js',
    'components/news/news-directive.js',
    'components/tabs/tabs.js',
    'components/tabs/tabs-directive.js',
    'components/tabs/tabs-controller.js'
], function() {
    // Execute app
    angular.bootstrap(document, ['theGuardianTabsApp']);
});
