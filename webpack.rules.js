const path = require('path');

module.exports = [
	// Add support for native node modules
	{
		// We're specifying native_modules in the test because the asset relocator loader generates a
		// "fake" .node file which is really a cjs file.
		test: /native_modules[/\\].+\.node$/,
		use: 'node-loader',
	},
	{
		test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
		parser: { amd: false },
		use: {
			loader: '@vercel/webpack-asset-relocator-loader',
			options: {
				outputAssetBase: 'native_modules',
			},
		},
	},
	{
		test: /\.jsx?$/,
		use: {
			loader: "babel-loader",
			options: {
				exclude: /node_modules/,
				presets: ["@babel/preset-react"],
			},
		},
	},
	// {
	// 	// loads .html files
	// 	test: /\.(html)$/,
	// 	include: [path.resolve(__dirname, "src")],
	// 	use: {
	// 		loader: "html-loader"
	// 	}
	// },
	{
		test: /\.css$/,
		include: [path.resolve(__dirname, 'src')],
		use: [
			{ loader: 'style-loader' },
			{ loader: 'css-loader' },
			{ loader: "postcss-loader" },
		],
	}
	// Put your webpack loader rules in this array.  This is where you would put
	// your ts-loader configuration for instance:
	/**
	 * Typescript Example:
	 *
	 * {
	 *   test: /\.tsx?$/,
	 *   exclude: /(node_modules|.webpack)/,
	 *   loaders: [{
	 *     loader: 'ts-loader',
	 *     options: {
	 *       transpileOnly: true
	 *     }
	 *   }]
	 * }
	 */
];
