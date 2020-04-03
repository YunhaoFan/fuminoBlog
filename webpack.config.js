const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/App.js', // 入口文件
	output: {
		path: path.resolve(__dirname, 'dist'), // 定义输出目录
		filename: 'bundle.js'  // 定义输出文件名称
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/, // 匹配.js文件
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /(\.jsx|\.js)/, // 配置jsx loader
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/react","@babel/env"]
					}
				}
			},{
				test: /(\.css|\.less)$/,
				use: [ 'style-loader', 'css-loader','less-loader'], // 顺序不能变
				include: path.resolve(__dirname, 'src')
			},{
				// 正则匹配
				test: /\.(png|jpg|gif|svg|ico)$/,
				// 使用url-loader对图片进行处理
				use: [
					{
						loader: 'url-loader',
						// 将小于8K的图片以base64的形式打包到js文件中
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: path.resolve(__dirname, 'dist/index.html')
		})
	]

};

