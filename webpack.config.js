module.exports = {
  mode: 'development',
  entry: {
    websocket: './src/client/websocket.js',
    http: './src/client/http.js',
  },
  output: {
    path: __dirname + '/clients',
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
