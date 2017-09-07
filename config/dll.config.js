const path = require("path");
const webpack = require('webpack');
const helpers = require('./helpers');
module.exports = {
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			alias_components: helpers.root('src/components'),
			alias_utils: helpers.root('src/utils')
		}
	},
	entry: {
		stuff: [
			"antd",
			"history",
			"jquery",
			"react",
			"react-codemirror",
			"react-dom",
			"react-markdown",
			"react-redux",
			"react-router-dom",
			"react-router-redux",
			"redux",
			"redux-thunk",
		],
	},//入口文件
	output: {
		path: helpers.root('dlls'),
		filename: "[name].dll.js",
		library: "[name]_[hash]"
	},
	plugins: [
		new webpack.DllPlugin({
			path: helpers.root('dlls/manifest.json'),
			name: "[name]_[hash]"
		})
	]
};