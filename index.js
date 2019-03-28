#!/usr/bin/env node --inspect

const express = require('express');
const path = require('path');
const inspector = require('inspector');

const app = express();
app.use(express.static('clients'));
app.use(function(req, res, next) {
  const reqOrigin = req.header('Origin') || '*';
  res.header('Access-Control-Allow-Origin', reqOrigin);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  const doc = path.join(__dirname, 'index.html');
  res.sendFile(doc);
});

// http client
app.get('/console', (req, res) => {
  try {
    const event = JSON.parse(req.query.event);
    const {method, data} = event;
    inspector.console[method](...data);
  } catch (err) {
    console.log(err);
  }
  res.send('ok');
});

// websocket client
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on('connection', socket => {
  console.log('connected.');

  socket.on('disconnect', () => {
    console.log('disconnected.');
  });

  socket.on('console', event => {
    const {method, data} = event;
    inspector.console[method](...data);
  });
});

const port = process.env.PORT || 8888;
http.listen(port, () => {
  console.log(`listening on ${port}`);
});
