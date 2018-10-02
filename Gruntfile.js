module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
                beautify: false,
                compress: true,
            },
            build: {
                files: {
                    'www/js/bundle.js': [
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/lightbox2/src/js/lightbox.js',
                        'assets/js/site.js',
                    ]
                }
            }
        },
        less: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
                beautify: false,
                compress: true,
            },
            build: {
                files: {
                    'www/css/bundle.css': [
                        'node_modules/lightbox2/src/css/lightbox.css',
                        'assets/less/site.less',
                        'assets/less/lightbox-images.less',
                    ]
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/lightbox2/src/images/',
                        src: ['*'],
                        dest: 'www/images/lightbox/',
                        filter: 'isFile'
                    },
                ],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'less', 'copy']);
};