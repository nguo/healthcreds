const webpack = require('webpack');

module.exports = {
	entry: {
		app: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://0.0.0.0:3000',
			'webpack/hot/only-dev-server',
			"./src/index.tsx"
		]
	},
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
		publicPath: '/dist/'
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	devServer: {
		host: '0.0.0.0',
		port: 3000,

		historyApiFallback: true,
		// respond to 404s with index.html

		hot: true,
		// enable HMR on the server
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	watchOptions: {
		ignored: /node_modules/,
		poll: 1000
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"]
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	}
};