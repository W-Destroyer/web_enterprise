const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const os = require('os');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var publicPath = 'http://localhost:3000';
// var publicPath = 'http://127.0.0.1:3000/dist';
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var HappyPack = require('happypack');

var webpackPlugins = [

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/vendor.js'
    }),
    new HappyPack({loaders: ['babel-loader']}),
    // new webpack.optimize.UglifyJsPlugin({
    //     sourceMap: true,
    //     compress: {
    //         warnings: true
    //     }
    // }),
    new webpack.ProvidePlugin({
        _: 'underscore',
        "window._": "underscore",
    }),
    // new webpack.ResolverPlugin([
    //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    // ]),

    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //     minimize: true,
    //     debug: false,
    //     options: {
    //         context: __dirname
    //     }
    // })
    new webpack.optimize.OccurrenceOrderPlugin()
];

var config = {
    // cache: true,
    // context: __dirname,
    entry: {
        index: './public/src/js/pages/index.jsx',
        about: './public/src/js/pages/about.jsx',
        contact: './public/src/js/pages/contact.jsx',
        news: './public/src/js/pages/news.jsx',
        product: './public/src/js/pages/product.jsx',
        showproduct: './public/src/js/pages/showproduct.jsx',
        service: './public/src/js/pages/service.jsx',
        message: './public/src/js/pages/message.jsx'
    },
    output: {
        path: __dirname + '/public/dist/',
        filename: "js/[name].js?[hash:8]",
        chunkFilename: "js/chunk/[id].js",
        publicPath: publicPath
    },
    module: {
        loaders:[{
            test: /\.js$/,
            loader: "happypack/loader"
        }, {
            test: /\.jsx$/,
            loader: "happypack/loader"
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(jpg|png)$/,
            loader: "url-loader?limit=8192"
        }],
    },
    // devtool: "inline-source-map",
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        'react-router-redux': 'ReactRouterRedux',
        'underscore': '_'
    },
    resolve: {
        modules: [process.cwd() + '/public/src/', process.cwd() + '/node_modules/', process.cwd() + '/public/src/js_components/'],
        alias: {
            // 'underscore': 'underscore/underscore.js',
            'cryptoJs': 'crypto-js/crypto-js.js',
            // 'react': lib + 'js_components/react/react.js',
            // 'react-dom': lib + 'js_components/react/react-dom.js',

            // 'react': 'react',
            // 'react-dom': 'react-dom',

            // 'react-router': 'react-router/modules',
            // 'redux': 'redux/dist/redux.js',
            // 'react-redux': 'react-redux/dist/react-redux.js',
            // 'react-router-redux': 'react-router-redux/src/index.js',
            'redux-logger': 'redux-logger/index.js',
            'redux-thunk': 'redux-thunk/redux-thunk.js',
            'antd': 'antd',

            // redux devtool
            'redux-devtools-extension': 'redux-devtools-extension/index.js',

            'webpack': 'webpack',
            'webpack-dev-server': 'webpack-dev-server',

            'module': 'js/module',
        },
        extensions: ['.js', '.html', '.jsx', '.json', '.ejs']
    },
    plugins: webpackPlugins
}

module.exports = config;
