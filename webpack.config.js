var webpack = require('webpack');

module.exports = {
	entry: './src/main7.js',
	output: {
		filename: './output/main10.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'buble' }
		]
	}
}