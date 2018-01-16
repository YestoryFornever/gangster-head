const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');
const theme = require('./theme');
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
		commonConfig(opt),
		{
			output: {},
			module: {
				rules: [
					{
						test: /\.css$/,
						use:[
							'style-loader',
							{
								loader:'css-loader',
								options: {
									modules:false,
								}
							},
							{
								loader: 'postcss-loader',
								options: {
									browsers: ["last 2 version"]
								}
							}
						],
						//include: helpers.root('src')//白名单
					},
					{
						test: /\.less$/,
						use: [
							'style-loader',
							{
								loader:'css-loader',
								options: {
									modules:false,
									/* alias: {// 未成功
										alias_materials:helpers.root('src/materials')
									} */
								}
							},
							{
								loader: 'postcss-loader',
								options: {
									sourceMap: true,
									browsers: ["last 2 version"]
								}
							},
							{
								loader:'less-loader',
								options:{
									sourceMap:true,
									modifyVars:theme,
									paths:[
										helpers.root('node_modules'),
										helpers.root('src/utils/styles'),
									]
								}
							}
						],
					},
				]
			},
			devtool: 'cheap-module-eval-source-map',//生成sourcemap文件,便于调试 --devtool "xxx"[package.json]
			devServer: {
				port: METADATA.port,
				host: METADATA.host,
				historyApiFallback: true,
				stats: 'minimal',
				// hot: true //--hot[package.json]
			},
			plugins: [
				new webpack.DefinePlugin({
					__APIHOST__:JSON.stringify("http://127.0.0.1:2109")
				}),
				new webpack.HotModuleReplacementPlugin()
			],
		}
	)
}; 