import queryString from 'query-string';
import io from 'socket.io-client';
import overwriteConsole from './overwrite-console';

try {
  const query = queryString.parse(location.search);
  const host = query.host || 'localhost';
  const port = query.port || 8888;
  const socket = io(`${host}:${port}`);

  socket.on('connect', () => {
    overwriteConsole(data => {
      socket.emit('console', data);
    });
  });
} catch (err) {
  if (window.orgConsole && typeof window.orgConsole.error == 'function') {
    window.orgConsole.error.call(console, err);
  }
}
