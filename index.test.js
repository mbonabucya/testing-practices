const stringLength = require('./modules/index.js');

test('The function should return the length of string', () => {
  expect(stringLength('james is')).toBe(7);
});

test('The function should return the length of string ', () => {
  expect(stringLength('Grace')).toBe(5);
});

test('the string length should be 1-10 ', () => {
  expect(stringLength('Grace')).toBeGreaterThan(1);
  expect(stringLength('Grace')).toBeLessThan(10);
});
