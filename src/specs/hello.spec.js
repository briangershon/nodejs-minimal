const esmImport = require('esm')(module);
const { getMessage } = esmImport('../hello');

test('has default message', () => {
  const message = getMessage();
  expect(message).toEqual('Welcome to your Node.js server, built with minimal dependencies.');
});
