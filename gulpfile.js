var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'routes/*.js'];

gulp.task('style', function(){
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
			vebose: true
		}))
		.pipe(jscs());
});


gulp.task('serve',['style'], function(){
	var options = {
		script: 'server.js',
		legacyWatch: true,
		delayTime: 0,
		env: {
			'PORT': 5000
		},
		watch: jsFiles
	};
	
	return nodemon(options)
		.on('restart', function(){
			console.log('Restarting...');
		});
});