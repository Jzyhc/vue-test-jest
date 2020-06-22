// const nodeExternals = require('webpack-node-externals')
module.exports = {
  // 输出文件目录
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  // externals: [nodeExternals()],
  // devtool: 'inline-cheap-module-source-map',
  lintOnSave: true,
  chainWebpack: () => {},
  configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
      // 是否使用css分离插件 ExtractTextPlugin
      extract: true,
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {},
      // 启用 CSS modules for all css / pre-processor files.
      modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // 是否启用dll
  devServer: {
      open: true,
      port: 8080,
      hotOnly: false,
      disableHostCheck: true,
      proxy: {
          '/trader/order/insurance': {
              target: 'https://sybao.sy.soyoung.com/', //对应自己的接口
              changeOrigin: true,
              ws: false,
              // secure: false,
          },
      },
  },

  // 第三方插件配置
  pluginOptions: {
      // ...

  }
}