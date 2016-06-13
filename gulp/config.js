module.exports = {
  root: './build',

  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],

  svgConfig: {
    shape: {
      dimension: { // Set maximum dimensions
        maxWidth: 32,
        maxHeight: 32
      },
      spacing: { // Add padding
        padding: 10
      },
      dest: 'out/intermediate-svg' // Keep the intermediate files
    },
    mode: {
      css: {
        dest: './',
        layout: 'diagonal',
        sprite: '../sprite/sprite.svg',
        bust: false,
        render: {
          scss: {
            dest: '../../../source/style/common/sprite.scss'
          }
        }
      }
    },
    symbol: true // Activate the «symbol» mode
  }

};