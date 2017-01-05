var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("Yeehaw -- you done created a Gulp task! You gonna make hand fore too long.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCSS task running here.");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
