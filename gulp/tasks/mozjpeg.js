module.exports = () => {
	$.gulp.task('mozjpeg', () => {
		return $.imagemin(['src/static/img/**/*.{jpg,jpeg}'], 'build/static/img', {
        use: [
            $.mozjpeg({quality: 90, progressive: true})
        ],
      
    });
	});

};

