const isPalindrome = require('../index.js');
const assert = require('assert');

describe('isPalindrome', () => {
  it('returns true for "abba"', () => {
    assert.strictEqual(isPalindrome('abba'), true);
  });

  it('returns true for "racecar"', () => {
    assert.strictEqual(isPalindrome('racecar'), true);
  });

  it('returns true for "a"', () => {
    assert.strictEqual(isPalindrome('a'), true);
  });

  it('returns false for "robot"', () => {
    assert.strictEqual(isPalindrome('robot'), false);
  });

  it('returns false for "ab"', () => {
    assert.strictEqual(isPalindrome('ab'), false);
  });
});