const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');

module.exports = (opt) => {
	return {
		entry: {
			main: './src/index.jsx',
		},//入口文件
		resolve: {
			extensions: ['.js', '.jsx'],
			alias:{
				alias_components:helpers.root('src/components'),
				alias_materials:helpers.root('src/materials'),
				alias_utils:helpers.root('src/utils')
			}
		},
		output: {
			path: helpers.root('../gangster-butt/public'),//输出文件目录（__dirname指的是当前目录）
			publicPath:'/',
			// publicPath: 'http://127.0.0.1:9999/',
			filename: '[name].[hash].bundle.js',//打包后文件名对应entry中的key名:e.g. bundle
			chunkFilename: '[name].[chunkhash].chunk.js'
		},
		module: {
			rules: [
				{
					test: path.join(node_modules_path, 'jquery'),
					use: [
						'expose-loader?jQuery',
						'expose-loader?$'
					]
				},
				{
					test: /\.js[x]?$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								["@babel/preset-env", {
									targets: {
										browsers: ["last 2 versions", "safari >= 7"],
										// node:"current"
									}
								}], 
								'@babel/stage-3',
								'@babel/react'
							],
							plugins:[
								/* 
								 * 'babel-plugin-import'
								 * ["import", { "libraryName": "antd", "style": true }],
								 */
								/* 
								 * "@babel/plugin-transform-runtime"
								 */
							]
						}
					},
					exclude: /node_modules/,//黑名单
				},
				{
					test: /\.(ico|png|jpe?g|gif|svg|woff|woff2|ttf|wav|mp3)$/,
					use: 'url-loader',
				},
			]
		},
		plugins: [
			/* 
			 * 在多个entry点抽取公共模块打成chunk包存入缓存
			 * 减小包大小
			 * 提升浏览器性能
			 */
			new webpack.optimize.CommonsChunkPlugin({
				name: "vendor",
				minChunks: function (module) {
					return module.context && module.context.indexOf("node_modules") !== -1;
				}
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: "runtime",
				minChunks: Infinity
			}),
			new HtmlWebpackPlugin({
				title: 'default-title',
				template: 'src/index.html',
				favicon: 'src/favicon.ico',
				inject: 'body',
				hash: true
			}),
			new CopyWebpackPlugin([
				{ from: 'src/materials', to: 'materials' },
			])
		],
	}
}; 