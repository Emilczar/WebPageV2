var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('buildcss', function(){
    return gulp.src(path.join('src','sass','style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join('dist','css')))
    
})

gulp.task('html', function() {
    return gulp.src(path.join('src', '*.html'))
    .pipe(gulp.dest(path.join('dist')))
})
gulp.task('public', function(){
    return gulp.src(path.join('src', 'public','*'))
    .pipe(gulp.dest(path.join('dist','public',)))
})

gulp.task('js' , function(){
    return gulp.src(path.join('src','js','*.js'))
    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join('dist','js')))
})

gulp.task('watch', function () {
    browserSync.init({
        server: "./dist"  
    });
    gulp.watch(path.join('src','**','*.scss'), ['buildcss']);
    gulp.watch(path.join('src', '*.html'), ['html']);
    gulp.watch(path.join('src','js','**'), ['js']);
    gulp.watch(path.join('src','public','**'), ['public'])
    .on('change', browserSync.reload);
  });