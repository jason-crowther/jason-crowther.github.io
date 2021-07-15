const path = require("path");
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
				loader: ["babel-loader", "eslint-loader"],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
							emitFile: false,
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
