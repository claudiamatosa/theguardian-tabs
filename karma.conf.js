module.exports = function(config){
  config.set({

    basePath : './app/',

    files : [
      'vendor/angular/angular.js',
      'vendor/angular-sanitize/angular-sanitize.js',
      'vendor/angular-mocks/angular-mocks.js',
      'components/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
