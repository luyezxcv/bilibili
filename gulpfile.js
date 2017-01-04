var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('server' , ['connect','scss','js','watch']);
gulp.task('connect',function(){
	connect.server({
		host:'127.0.0.1',
		port:3000,
		root:'dist/',
		livereload:true
	});
});

gulp.task('scss',function(){
	gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(concat('style.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('js',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch',function(){
	gulp.watch('src/js/*.js',['js']);
	gulp.watch('src/scss/*.scss',['scss']);
});

gulp.task('jshint',function(){
	gulp(src('src/js/*.js'))
	.pipe(jshint())
	.pipe(jshint.reporter());
});