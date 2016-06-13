'use strict';

module.exports = function() {
  $.gulp.task('sprite.svg', function() {
    return $.gulp.src('./source/sprite_svg/**/*.svg')
      .pipe($.gp.svgSprite($.config.svgConfig))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Sprite SVG',
          message: error.message
        }
      }))
      .pipe($.gulp.dest($.config.root + '/assets/sprite/'));
  })
};
