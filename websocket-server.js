const inspector = require('inspector');
module.exports = function startServer(io) {
  io.on('connection', socket => {
    console.log('connected.');

    socket.on('disconnect', () => {
      console.log('disconnected.');
    });

    socket.on('debug', msg => {
      inspector.console.log(msg);
      io.emit('debug', `receive ${msg}`);
    });
  });
};
