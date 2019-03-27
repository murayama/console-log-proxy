const overwriteConsole = callback => {
  const consoleMethods = ['debug', 'error', 'info', 'log', 'warn', 'dir', 'table'];
  const orgConsole = {};
  for (const method of consoleMethods) {
    orgConsole[method] = console[method];
    console[method] = (...data) => {
      orgConsole[method].call(console, ...data);
      if (method == 'error') {
        const json = JSON.stringify(data[0], Object.getOwnPropertyNames(data[0]));
        data[0] = JSON.parse(json);
      }
      callback({method, data});
    };
  }
};
export default overwriteConsole;
