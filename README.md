# The Guardian tabs

This project aims to display a list of tabs with news from The Guardian API.

[![Build Status](https://travis-ci.org/claudiamatosa/theguardian-tabs.svg?branch=master)](https://travis-ci.org/claudiamatosa/theguardian-tabs)

### To run locally

Install nodeJS, then run, from the root directory:

    npm start

Grunt will build the LESS files with the rest of the app into `dist` and npm will run a local
server from there.

If everything has worked successfully, navigate to http://localhost:8000.

## Testing

This app supports unit and end-to-end tests, using Jasmine and Protractor.

To run the unit tests (currently none):

    karma start
    
To run the end-to-end tests:
    
    npm run protractor

## Tools used

- `angular-seed`, for the base structure - https://github.com/angular/angular-seed
- `Grunt`, to run a local server and see the routes properly - http://gruntjs.com/

## Architechture

In order to take advantage of the angular-seed structure, the components folder
was used to store template and functionality for the tabs and the news list.

Angular Seed advocates components should be split by functionality, instead of grouping
controllers, services and directives in different folders. Also, views regarding
to url routes stay under the main app folder.

An async module loading system is also being used, using script.js. loader.js handles the
loading.

For experimental purposes, this was chosen instead of having the CSS, JS and HTML into
separate folders.

This said, the structure of the final app is:

    app
    + less-atoms
    |   + components
    |   |   _tabs.less
    |   |   _lists.less
    |   + layout
    |   |   _fonts.less
    |   |   _colours.less
    |   |   _media-queries.less
    |   + vendor
    |   |   _lesshat.less
    |   main.less
    + components
    |   + tabs
    |   |   tabs.js
    |   |   tabs-directive.js
    |   |   tabs-controller.js
    |   |   tabs.html
    |   |   tabs.less
    |   + news
    |   |   news.js
    |   |   news-service.js
    |   |   news-directive.js
    |   |   news.html
    |   |   news.less
    app.js
    app.less
    index.html
    loader.js


## TODO

For unfinished items, please view TODO.md.

