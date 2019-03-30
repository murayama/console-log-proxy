import queryString from 'query-string';
import axios from 'axios';
import overwriteConsole from './overwrite-console';

try {
  const query = queryString.parse(location.search);
  const host = query.host || 'localhost';
  const port = query.port || 8888;
  const method = query.method || 'http';
  const http = axios.create({
    baseURL: `${method}://${host}:${[port]}`,
    withCredentials: true,
  });
  overwriteConsole(data => {
    // TODO: batch request
    http.get(`/console?event=${JSON.stringify(data)}`).then(res => {});
  });
} catch (err) {
  if (window.orgConsole && typeof window.orgConsole.error == 'function') {
    window.orgConsole.error.call(console, err);
  }
}
