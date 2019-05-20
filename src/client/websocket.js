import io from 'socket.io-client';
import overwriteConsole from './overwrite-console';

try {
  const config = window.console_log_proxy_config || {};
  const host = config.host || 'localhost';
  const port = config.port || 8888;
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
