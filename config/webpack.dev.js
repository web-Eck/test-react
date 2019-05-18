const path = require('path');
const uglify = require('uglifyjs-webpack-plugin'); //js压缩插件
const htmlPlugin = require('html-webpack-plugin'); //html打包插件
const extractTextPlugin = require('extract-text-webpack-plugin'); //css分离

var website = {
    publicPath:"http://localhost:8080/" //这里的IP和端口，是你本机的ip或者是你devServer配置的IP和端口
}

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath:website.publicPath  //publicPath：主要作用就是处理静态文件路径的
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-withimg-loader']
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new uglify(), //js压缩
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true //去掉属性的双引号
            },
            hash: true, 
            template: './src/index.html' //要打包的html模版路径和文件名称
        }),
        new extractTextPlugin('css/index.css')
    ],
    devServer: {
        contentBase: 'dist'
    }
}