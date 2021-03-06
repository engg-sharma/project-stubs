var gulp = require('gulp');
// var less = require('gulp-less');
// var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// var cleanCSS = require('gulp-clean-css');
var del = require('del');

var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpWebserver = require('gulp-webserver');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
    styles: {
        src: 'src/**/*.scss',
        dest: 'public/styles/'
    },
    scripts: {
        watch: 'src/**/*.js',
        src: 'src/index.js',
        dest: 'public/scripts/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['assets']);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
    gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    // return gulp.src(paths.scripts.src, { sourcemaps: true })
    //     .pipe(babel({ presets: ['es2015'] }))
    //     .pipe(uglify())
    //     .pipe(concat('index.min.js'))
    //     .pipe(browserify())
    //     .pipe(gulp.dest(paths.scripts.dest));
    browserify(paths.scripts.src)
        // .transform(babelify, { presets: ["@babel/preset-env"] })
        .transform(babelify)
        .bundle()
        // .pipe(uglify()) //doesn't work
        .pipe(source('index.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function webserver() {
    return gulp.src('public')
        .pipe(gulpWebserver({
            livereload: true,
            open: true,
            port: 3000,
            fallback: './public/index.html'
        }));
}

function watch() {
    gulp.watch(paths.scripts.watch, scripts);
    gulp.watch(paths.styles.src, styles);
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.webserver = webserver;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts, webserver));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);