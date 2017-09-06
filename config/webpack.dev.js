const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');

/**
 * Webpack 常量
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 9999;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({
	env: ENV
}).metadata, {
		host: HOST,
		port: PORT,
		ENV: ENV,
		HMR: HMR
	});

module.exports = (opt) => {
	return webpackMerge(
		commonConfig(),
		{
			output: {
				filename: '[name].bundle.js',//打包后文件名对应entry中的key名:e.g. bundle
				chunkFilename: '[name].[chunkhash].chunk.js'
			},
			devtool: 'cheap-module-eval-source-map',//生成sourcemap文件,便于调试 --devtool "xxx"[package.json]
			devServer: {
				port: METADATA.port,
				host: METADATA.host,
				historyApiFallback: true,
				stats: 'minimal',
				hot: true //--hot[package.json]
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin()
			],
		}
	)
}; 