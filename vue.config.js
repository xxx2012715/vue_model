const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ?
		'/static/mobile' : '/',
	outputDir: 'dist',
	assetsDir: 'static',
	indexPath: 'index.html',
	filenameHashing: false,
	devServer: {
		open: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8082',
				pathRewrite: {
					'^/api': '/'
				},
				changeOrigin: true,
			},
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				'imgs': path.join(__dirname, 'src/assets/images'),
			}
		}
	},
}
