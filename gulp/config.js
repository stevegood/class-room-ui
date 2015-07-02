var dest = './build',
    src = './src',
    mui = './node_modules/material-ui/src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [dest + '/**']
  },

  markup: {
    src: src + '/www/**',
    dest: dest
  },

  browserify: {
    debug: true,
    bundleConfigs: [{
      entries: src + '/js/application.jsx',
      dest: dest,
      outputName: 'application.js'
    }]
  }
};
