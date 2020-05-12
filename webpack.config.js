const path = require('path');
const rules = [
    {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    node: { fs: 'empty' },
    devServer: {
        contentBase: './',
        port: 8087
    }

}