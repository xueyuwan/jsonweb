'use strict';

var gulp = require('gulp'),
 jshint = require('gulp-jshint'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./www/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task("sass",function(){
    gulp.src('./www/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./www/css'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./www/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./www/'))
        // .pipe(rename('all.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./www'));
});


// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');
    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('lint', 'sass', 'scripts');
    });

});