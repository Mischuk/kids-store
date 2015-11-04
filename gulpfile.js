var gulp         = require('gulp');
var connect      = require('gulp-connect');
var stylus       = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var rigger       = require('gulp-rigger');
var notify       = require('gulp-notify');

// Local server
gulp.task('connect', function () {
  connect.server({
    root: ['build'],
    livereload: true
  });
});

// HTML
gulp.task('html', function() {
  return gulp.src("dev/html/*.html")
    .pipe(rigger())
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());
});

// Images
gulp.task('images', function () {
  return gulp.src('dev/images/**/*')
    .pipe(gulp.dest('build/images'))
    .pipe(connect.reload());
});

// Fonts
gulp.task('fonts', function () {
  return gulp.src('dev/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))
});

//JS
gulp.task('js', function() {
  return gulp.src("dev/js/*.js")
    .pipe(gulp.dest("build/js"))
    .pipe(connect.reload());
});

// Stylus
gulp.task('stylus', function() {
  var onError = function(err) {
    notify.onError({
      title:    "Gulp",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>"
    })(err);
    this.emit('end');
  };
  return gulp.src("dev/stylus/styles.styl")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(stylus({compress: false}))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'firefox >= 4',
        'safari >= 5',
        'IE >= 8'
      ],
      cascade: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/css"))
    .pipe(connect.reload());
});

// Watching project files
gulp.watch("dev/stylus/**/*", ['stylus']);
gulp.watch("dev/html/*.html", ['html']);
gulp.watch("dev/html/templates/*.html", ['html']);
gulp.watch("dev/images/**/*", ['images']);
gulp.watch("dev/fonts/**/*", ['fonts']);
gulp.watch("dev/js/*.js", ['js']);

gulp.task('default', ['connect', 'html', 'stylus', 'images', 'js', 'fonts']);