// packages 
var gulp        = require('gulp'),
	babel		= require('gulp-babel'),
    sourcemaps	= require('gulp-sourcemaps');
    
// build all the JavaScript things
gulp.task('build-script', function() {
	var src = [
		'./src/components/*.js',
		'./src/components/*.jsx'
		];

	return gulp.src(src)
				.pipe(sourcemaps.init())
				.pipe(babel({
					presets: [
						'es2015',
						'react'
						]
					}))
				.pipe(concat('dw.js'))
				.pipe(gulp.dest('./dist/script'));
});

// Default Task
gulp.task('default','build-script');