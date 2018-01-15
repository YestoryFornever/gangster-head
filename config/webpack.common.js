const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
const commonConfig = require('./webpack.common.js');

const fs = require('fs');
const pkgPath = path.join(helpers.root(), 'package.json');
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};
let theme = {};
if (pkg.theme && typeof (pkg.theme) === 'string') {
	let cfgPath = pkg.theme;
	// relative path
	if (cfgPath.charAt(0) === '.') {
		cfgPath = path.resolve(helpers.root(), cfgPath);
	}
	const getThemeConfig = require(cfgPath);
	theme = getThemeConfig();
} else if (pkg.theme && typeof (pkg.theme) === 'object') {
	theme = pkg.theme;
}

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
				{
					test: /\.(ico|png|jpe?g|gif|svg|woff|woff2|ttf|wav|mp3)$/,
					use: 'url-loader',
				},
			]
		},
		plugins: [
			new webpack.DllReferencePlugin({
				manifest: helpers.root('dlls/manifest.json'),
				extensions:['js','jsx']
			}),
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
			new AddAssetHtmlPlugin({
				filepath: require.resolve(helpers.root('dlls/stuff.dll.js')),
				includeSourcemap: false
			}),
			new CopyWebpackPlugin([
				{ from: 'src/materials', to: 'materials' },
			])
		],
	}
}; 