var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

gulp.task('build', function() {
  // noop
})

gulp.task('test:mocha-only-detector', function(cb) {
  if (process.env.CI) {
    var child = spawn('./node_modules/.bin/mocha-only-detector', ['test.js'], {
      cwd: process.cwd()
    });
    var stdout = '';
    var stderr = '';
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function(data) {
      stdout += data;
      gutil.log(data);
    });
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data) {
      stderr += data;
      gutil.log(gutil.colors.red(data));;
    });
    child.on('close', function(code) {
      if (code === 0) {
        cb();
      } else {
        cb(stderr);
      }
    });
  } else {
    cb();
  }
});

gulp.task('test:unit', function() {
  shell.task(['.node_modules/.bin/mocha test.js']);
});

gulp.task('test', function() {
  runSequence('build', 'test:mocha-only-detector', 'test:unit');
});
