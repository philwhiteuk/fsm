require('babel-core/register');
var gulp = require('gulp');
var connect = require('gulp-connect');
var babelify = require("babelify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var mocha = require('gulp-mocha');

gulp.task('default', ['build', 'watch', 'connect']);

gulp.task('build', function () {
    return browserify({
            entries: ['app/javascript/index.js']
        })
        .on('error', (err) => { console.error(err); this.emit('end') })
        .transform('babelify')
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist'));
});

gulp.task('reload', () => gulp.src('dist/**/*').pipe(connect.reload()));

gulp.task('test', () => gulp.src('test/*.js', {read: false}).pipe(mocha()));

gulp.task('watch', () => {
    gulp.watch(['app/less/*less'], ['less']);
    gulp.watch(['app/javascript/*js', 'test/*js'], ['test', 'build']);
    gulp.watch(['test/*js'], ['test']);
});
