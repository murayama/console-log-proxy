const overwriteConsole = callback => {
  const consoleMethods = ['debug', 'error', 'info', 'log', 'warn', 'dir', 'table'];
  window.orgConsole = {};
  for (const method of consoleMethods) {
    window.orgConsole[method] = console[method];
    console[method] = (...data) => {
      window.orgConsole[method].call(console, ...data);
      if (method == 'error') {
        const json = JSON.stringify(data[0], Object.getOwnPropertyNames(data[0]));
        data[0] = JSON.parse(json);
      }
      callback({method, data});
    };
  }
};
export default overwriteConsole;
