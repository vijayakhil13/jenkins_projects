const { getWelcomeMessage } = require('./utils');

test('getWelcomeMessage returns greeting string', () => {
  expect(getWelcomeMessage()).toBe('Hello, welcome to the Sample App!');
});
