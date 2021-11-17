const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: [require.resolve('buffer'), 'Buffer'],
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      // required to fix SSR build on Netlify
      // https://github.com/sindresorhus/got/issues/345
      // https://github.com/webpack/webpack/issues/5294
      new webpack.IgnorePlugin({ resourceRegExp: /^electron$/ }),
    ],
  })
}
