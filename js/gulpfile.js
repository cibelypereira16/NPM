const gulp = require('gulp');
const concat = require ('gulp-concat');
const uglify = require ('gulp-uglify');

gulp.task('concat-script',function(){
    return gulp.src('js/*js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('minify'));
    
});