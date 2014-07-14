module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            all: {
                files: {
                    "dist/grape.multiplayer.min.js": [ "dist/grape.multiplayer.js" ]
                },
                options: {
                    preserveComments: false,
                    banner: grunt.file.read('js/multiplayer/banner.js'),
                    sourceMap: "dist/grape.multiplayer.min.map",
                    sourceMappingURL: "grape.multiplayer.min.map",
                    report: "min",
                    beautify: {
                        ascii_only: true
                    },
                    compress: {
                        hoist_funs: false,
                        loops: false,
                        unused: false
                    }
                }
            }
        },
        build:{
            client:{ //TODO
                name: 'client',
                dst: 'dist/multiplayer-client.js'
            }
        }
    });

    grunt.loadTasks('build'); //build/*

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['build', 'min']);

    grunt.registerTask('min', ['uglify']);
};