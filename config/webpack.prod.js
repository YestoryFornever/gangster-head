const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');

const extractCSS = new ExtractTextPlugin({filename:'[name]-css.css'});
const extractLESS = new ExtractTextPlugin({filename:'[name]-less.css'});
const theme = require('./theme');

module.exports = (opt) => {
	return webpackMerge(
		commonConfig(opt),
		{
			output: {
				filename: '[name].[hash].bundle.js',
				chunkFilename: '[name].[chunkhash].chunk.js'
			},
			module: {
				rules: [
					{
						test: /\.css$/,
						use: extractCSS.extract({
							fallback: 'style-loader',
							use: [
								{
									loader: 'css-loader',
									options: {
										modules: false,
									}
								},
								{
									loader: 'postcss-loader',
									options: {
										browsers: ["last 2 version"]
									}
								}
							]
						}),
						// include: helpers.root('src')//白名单
					},
					{
						test: /\.less$/,
						use: extractLESS.extract({
							fallback: 'style-loader',
							use:[
								{
									loader: 'css-loader',
									options: {
										modules: false,
									}
								},
								{
									loader: 'postcss-loader',
									options: {
										browsers: ["last 2 version"]
									}
								},
								{
									loader:'less-loader',
									options:{
										modifyVars:theme,
										paths:[
											helpers.root('node_modules'),
											helpers.root('src/utils/styles'),
										]
									}
								}
							]
						}),
					},
				]
			},
			devtool: 'source-map',//生成sourcemap文件,便于调试
			plugins:[
				/* 
				 * when using 
				 * new UglifyJsPlugin 
				 * and 
				 * webpack -p --progress --colors[--opimize-minimize (or -p)] 
				 * you are adding the UglifyJsPlugin twice
				 */
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
				new webpack.DefinePlugin({
					__APIHOST__:JSON.stringify(false)
				}),
				extractCSS,
				extractLESS
			]
		}
	)
}; 