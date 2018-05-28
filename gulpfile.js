const gulp = require('gulp');
const webserver = require('gulp-webserver');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const sequence = require('run-sequence');
const del = require('del');
const config = require('./config.json');
const request = require('request');
const zip = require('gulp-zip');
const fs = require('fs');
const filename = 'build.zip';
const archivesFolder = 'dist/archives';

// helper task

gulp.task('clean', function() {
    return del('dist');
});

gulp.task('index.html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
    return gulp.src('css/style.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function(cb) {
    let config = require('./webpack.config.js');
    let firstBuildReady = false;

    return gulp.src('scripts/app.js')
        .pipe(webpackStream(config(false), null, function(err, stats) {
            firstBuildReady = true;
        }))
        .pipe(gulp.dest('dist'))
        .on('data', function() {
            if (firstBuildReady && !cb.called) {
                cb.called = true;
                cb();
            }
        });
});

gulp.task('webpack-prod', function() {
    let config = require('./webpack.config.js');

    return gulp.src('scripts/app.js')
        .pipe(webpackStream(config(true)))
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['index.html', 'styles'])

gulp.task('watch', function() {
    gulp.watch('index.html', ['index.html']);
    gulp.watch('css/style.css', ['styles']);
});

gulp.task('server', function() {
    return gulp.src('./dist')
        .pipe(webserver({
            https: true,
            port: 8000,
            open: 'https://www.facebook.com/embed/instantgames/' + config.FB_appId + '/player?game_url=https://localhost:8000'
        }));
});

gulp.task('archive', function() {
    return gulp.src([
            __dirname + '/dist/**',
            '!'+ __dirname + '/dist/archives/**',
            '!**.zip'
        ])
            .pipe(zip(filename))
            .pipe(gulp.dest(archivesFolder));
});

gulp.task('upload', function(cb) {
    request.post({
        url: 'https://graph-video.facebook.com/' + config.FB_appId + '/assets',
        formData: {
            'access_token' : config.FB_uploadAccessToken,
            'type': 'BUNDLE',
            'comment': 'Uploaded via gulp task',
            'asset': {
                value: fs.createReadStream(__dirname + '/'+ archivesFolder + '/' + filename),
                options: {
                    filename: filename,
                    contentType: 'application/octet-stream'
                }
            }
        },
    }, function(error, response, body) {
        if (error || !body) {
            console.log(error);
        }

        cb();
    });
});

// main task

gulp.task('dev', function(cb) {
    sequence('clean', 'build', 'webpack', 'watch', cb);
});

gulp.task('dev-embedded-player', function(cb) {
    sequence('clean', 'build', 'webpack', 'watch', 'server', cb);
});

gulp.task('push', function(cb) {
    sequence('archive', 'upload', cb);
});
