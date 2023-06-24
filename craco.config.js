/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () => {
  const isProductionBuild = process.env.NODE_ENV === 'production'
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE ? 'server' : 'json'

  const plugins = []

  if (isProductionBuild) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode }))
  }

  return {
    webpack: {
      plugins,
      alias: {
        '@collections': path.resolve(__dirname, 'src/collections'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@appTypes': path.resolve(__dirname, 'src/types'),
        '@contexts': path.resolve(__dirname, 'src/contexts')
      }
    }
  }
}
