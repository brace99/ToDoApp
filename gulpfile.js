var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn');

// Запуск локального сервера
gulp.task('connect', function() {
	connect.server({
    	root: 'app',
    	livereload: true,
    	port: 9999
    });
	opn('http://localhost:9999'); // uncomment if at home
});

// HTML
gulp.task('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

//CSS
gulp.task('css', function () {
	gulp.src('./app/css/*.css')
		.pipe(connect.reload());
});

//JS
gulp.task('js', function () {
	gulp.src('./app/js/*.js')
    	.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);