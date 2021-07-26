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
    ],
  })
}
