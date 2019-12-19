const path = require('path');

module.exports = {
    entry: ['./src/js/index.js', './src/sass/main.scss'],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
};