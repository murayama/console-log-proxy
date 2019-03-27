module.exports = {
  mode: 'development',
  entry: {
    websocket: './client/websocket.js',
    http: './client/http.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]-client.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: ['>0.25% in JP, not ie <= 10, not op_mini all'],
                    useBuiltIns: 'usage',
                    corejs: 3,
                    modules: false,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
