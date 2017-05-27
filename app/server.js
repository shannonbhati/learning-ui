var path = require('path');
var webpack = require('webpack');
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
var compiler = webpack({
entry: {
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
    ]
  },
  output: {
    path: path.join(__dirname),
    filename: 'app.js',
    publicPath: '/static/'
  }
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/static/'
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('*', proxy({target: "http://127.0.0.1:8080", cookieDomainRewrite: "127.0.0.1", hostRewrite: "127.0.0.1:3000"}));



app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
