module.exports = {
	resolve: {
    	extensions: ['.js', '.jsx'],
  	},
	context: __dirname,
	entry: './app/js/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		inline: true
	},
	module: {
		loaders: [{
			test: /(\.js|.jsx)$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-2', 'react']
			}
		}],
	},	
};