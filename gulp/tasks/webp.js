module.exports = () => {
	$.gulp.task('webp', () => {
		return $.imagemin(['src/static/img/**/*.*'], 'build/static/img', {
			
    		use: [
				$.imageminWebp({quality: 50})
			]
        
    });
	});

};


