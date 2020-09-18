module.exports = () => {
	$.gulp.task('pug', () => {
		return $.gulp.src(['src/pug/*.pug', '!src/pug/mixin.pug', '!src/pug/arrs.pug'])
			.pipe($.pug({
				pretty:true
			}))
			.pipe($.gulp.dest('build'))
			.on('end', $.browserSync.reload);
	});
};