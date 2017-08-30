const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');

/**
 * Webpack 常量
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig({
	env: ENV
}).metadata, {
		host: HOST,
		port: PORT,
		ENV: ENV,
		HMR: false
	});

module.exports = (opt) => {
	isProd = options.env === 'production';
	if (isProd) {
		METADATA.baseUrl = '/gsj/';
	};
	return webpackMerge(
		commonConfig(),
		{
			devtool: 'source-map',//生成sourcemap文件,便于调试
			plugins:[
				new UglifyJsPlugin({
					beautify: false, //prod
					output: {
						comments: false
					}, //prod
					mangle: {
						screw_ie8: true
					}, //prod
					compress: {
						screw_ie8: true,
						warnings: false,
						conditionals: true,
						unused: true,
						comparisons: true,
						sequences: true,
						dead_code: true,
						evaluate: true,
						if_return: true,
						join_vars: true,
						negate_iife: false, // we need this for lazy v8
						drop_debugger: true,
						drop_console: true
					},
				}),
			]
		}
	)
}; 