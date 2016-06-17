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
      .pipe($.rsp.remove({
        properties: [$.rsp.PROPS_STROKE, $.rsp.PROPS_FILL, 'class']
      }))
      .pipe($.gulp.dest($.config.root + '/assets/sprite/'));
  })
};
