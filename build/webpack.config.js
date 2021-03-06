/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const babelOptions = {
  plugins: ['@vue/babel-plugin-jsx'],
}

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, '../packages/jiucai/index.ts'),
  output: {
    path: resolve(__dirname, '../packages/jiucai/dist'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'JIUCAI',
    umdNamedDefine: true,
  },
  stats: 'verbose',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsxSuffixTo: [/\.vue$/],
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
  },
  externals: {
    vue: 'Vue',
  },
  plugins: [new VueLoaderPlugin()],
}
