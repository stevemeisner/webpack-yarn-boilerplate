module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 5 versions', '> 5%'],
    },
    cssnano: {
      autoprefixer: false,
      filterPlugins: false,
      discardComments: {
        removeAll: true,
      },
    },
  },
};
