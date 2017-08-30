const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');

module.exports = (opt) => {
	return {
		entry: {
			bundle: './src/index.jsx'
		},//入口文件
		resolve: {
			extensions: ['.js', '.jsx']
		},
		output: {
			path: path.resolve(__dirname, 'dist'),//输出文件目录（__dirname指的是当前目录）
			filename: './[name].js',//打包后文件名对应entry中的key名:e.g. bundle
			publicPath: 'http://127.0.0.1:9999/',
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
							presets: ['es2015', 'stage-3', 'react'],
							plugins:[
								["import", { "libraryName": "antd", "style": true }]
							]
						}
					},
					exclude: /node_modules/,//黑名单
				},
				{
					test: /\.css$/,
					use:ExtractTextPlugin.extract({
						fallback:'style-loader',
						use:[
							'css-loader',
							{
								loader: 'postcss-loader',
								options: {
									browsers: ["last 2 version"]
								}
							}
						]
					}),
					include: helpers.root('src')//白名单
				},
				{
					test: /\.less$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							'css-loader',
							{
								loader: 'postcss-loader',
								options: {
									browsers: ["last 2 version"]
								}
							},
							'less-loader'
						]
					}),
				},
				{
					test: /\.(png|jpg|woff|woff2)$/,
					use: 'url-loader',
				},
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'default-title',
				template: 'src/index.html',
				inject: 'body',
				hash: true
			}),
			new CopyWebpackPlugin([
				{ from: 'src/materials', to: 'materials' },
			]),
			new ExtractTextPlugin('[name].css')
		],
	}
}; 