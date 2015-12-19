var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'), //css压缩
	concat = require('gulp-concat'), 		//文件合并
	uglify = require('gulp-uglify'),		//js压缩文件
	rename = require('gulp-rename'),		//重命名
	del = require('del')					//文件删除

gulp.task('minifycss',function(){
	return gulp.src('src/*.css')
			.pipe(minifycss())
			.pipe(gulp.dest('minified/css'))
});

gulp.task('minifyjs',function(){
	return gulp.src('src/*.js')
			.pipe(concat('main.js'))
			.pipe(gulp.dest('minified/js'))
			.pipe(rename({suffix:'.min'}))
			pipe(uglify())
			.pipe(gulp.dest('minified/js'))
});

gulp.task('clean',function(cb){
	del(['minified/css','minified/jss'],cb)
});

gulp.task('default', function(){
	gulp.start('clean','minifycss','minifyjs'); 
});