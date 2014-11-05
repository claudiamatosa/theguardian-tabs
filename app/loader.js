/**
 * Load dependencies
 */
$script([
    'vendor/angular/angular.js',
    'vendor/angular-sanitize/angular-sanitize.js',
    'components/news/news.js',
    'components/news/news-service.js',
    'components/news/news-directive.js',
    'components/news/news-controller.js',
    'components/tabs/tabs.js',
    'components/tabs/tabs-directive.js',
    'components/tabs/tabs-controller.js',
    'app.js'
], function () {
    // Execute app
    angular.bootstrap(document, ['theGuardianTabsApp']);
});