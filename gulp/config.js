module.exports = {
  root: './build',

  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],

  svgConfig: {
      mode: {
        defs: {
          dest: './',
          sprite: 'sprite.svg'
        }
      },
      shape: {
        spacing: {
          padding: 0,
          box: 'content'
        }
      }
    },
};