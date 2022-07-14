const reverseString = require('./modules/reverse.js');

test('The function should return the reversed string', () => {
  expect(reverseString('james is')).toBe('sisemaj');
});