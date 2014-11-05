'use strict';

describe('theGuardianTabsApp.news module', function () {
    var createController,
        scope;
    
    beforeEach(module('theGuardianTabsApp.news'));

    beforeEach(inject(function (
        $rootScope,
        $controller
    ) {
        scope = $rootScope.$new();

        /**
         * Creates a controller using the passed dependencies
         * 
         * @param {Object} args - List of dependencies to overwrite,
         * containing the values. Example:
         * 
         * {
         *     'PLAYERS': {},
         *     'deckFactory': function () {}
         * }
         */
        createController = function (controller, args) {
            var key,
                mockedDependencies = {
                    '$scope': scope
                };

            if (args) {
                for (key in args) {
                    if (args.hasOwnProperty(key)) {
                        mockedDependencies[key] = args[key];
                    }
                } 
            }

            return $controller(controller, mockedDependencies);
        };
    }));

    describe('version service', function () {
        it('should load the controller', inject(function () {
            expect(createController('NewsCtrl')).toBeDefined();
        }));
    });
});