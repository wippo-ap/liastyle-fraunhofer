const path = require('node:path');
const devserver = require('@liascript/devserver/dist/lib.js');

// npm hoists the interpreter next to the devserver. Pass both paths explicitly
// because the upstream CLI otherwise looks inside its own package directory.
const packageRoot = path.dirname(require.resolve('@liascript/devserver/package.json'));
devserver.init(packageRoot, path.join(__dirname, 'node_modules'));
process.chdir(__dirname);
devserver.start(3000, 'localhost', '.', false, true, false, false).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
