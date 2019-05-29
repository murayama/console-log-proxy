const getStackTrace = function() {
  var obj = {};
  Error.captureStackTrace(obj, getStackTrace);
  return obj.stack;
};
const overwriteConsole = callback => {
  const consoleMethods = ['debug', 'error', 'info', 'log', 'warn', 'dir', 'table'];
  window.orgConsole = {};
  for (const method of consoleMethods) {
    window.orgConsole[method] = console[method];
    console[method] = (...data) => {
      window.orgConsole[method].call(console, ...data);
      for (const i in data) {
        if (data[i] instanceof Error) {
          const json = JSON.stringify(data[i], Object.getOwnPropertyNames(data[i]));
          data[i] = JSON.parse(json);
        }
      }
      if (method == 'error') {
        data.push(getStackTrace());
      }
      callback({method, data});
    };
  }
};
export default overwriteConsole;
