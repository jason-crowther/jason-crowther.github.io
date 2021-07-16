const path = require("path");
const webpack = require('webpack');
const sass = require('sass');
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		publicPath: "/",
		path: path.resolve(__dirname, "./dist/"),
		filename: "js/app.js",
	},
	module: {
		rules: [
			{
				test: /\.(css|sass|scss)$/,
				use: ["vue-style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.js$/,
				exclude: /[\\/]node_modules[\\/]/,
				loader: "babel-loader",
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
							emitFile: false,
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
							esModule: false,
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
		extensions: ["*", ".js", ".vue", ".json"],
	},
	plugins: [new VueLoaderPlugin()],
};
