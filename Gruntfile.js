module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    base: 'dist',
                    keepalive: true,
                    livereload: true
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['**/*.*',
                             '!**/*.less'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        less: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['**/*.less',
                              '!less-atoms/**/*.*'],
                        dest: 'dist/',
                        ext: '.css'
                    }
                ]
            }
        },

        clean: ['dist']
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'clean',
        'less',
        'copy',
        'connect'
    ]);

};
