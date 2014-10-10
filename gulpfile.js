var gulp = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	rework = require('gulp-rework'),
	svg = require('rework-svg'),
	clean = require('gulp-clean'),
	nodemon = require('gulp-nodemon'),
	livereload = require('gulp-livereload'),
	jsx = require('gulp-react');

gulp.task('handlebars', function() {
	var templateData = {
		name: 'Tom'
	},
	options = {
		partials: {
			header: '<nav><ul><li>Home</li><li>Away</li></ul></nav>'
		}
	}

	return gulp.src('src/*.html')
		.pipe(handlebars(templateData, options))
		.pipe(gulp.dest('dist'));
});

gulp.task('rework', function() {
	return gulp.src('src/css/*.scss')
		.pipe(rework(svg))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function() {
	return gulp.src('dist/*', {read:false})
		.pipe(clean())
});

gulp.task('develop', function() {
	nodemon({ script: 'server.js', ext: 'html js' })
		.on('change', ['default'])
		.on('restart', function() {
			console.log("Change detected, server restarted.")
		})
});

gulp.task('jsx', function() {
	return gulp.src('components/*.js')
		.pipe(jsx())
		.pipe(gulp.dest('compiled-components'))
})

gulp.task('default', ['clean','handlebars','rework','jsx'], function() {

});