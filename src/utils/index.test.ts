import { expect, describe, it } from 'vitest';
import { removeHyphen, sentenceCase } from '.';

describe('sentenceCase function', () => {
  it('should return capitalized string', () => {
    const text = 'first unit test of Brandon Castillo 👨🏽‍💻';
    const result = sentenceCase(text);
    const expected = 'First unit test of Brandon Castillo 👨🏽‍💻';

    expect(result).toBe(expected);
  });

  it('Edge case: empty string', () => {
    const result = sentenceCase('');
    const expected = '';

    expect(result).toBe(expected);
  });
});

describe('Unit test removeHyphen function', () => {
  it('should remove hyphens from string', () => {
    const text = 'first-unit-test-of-Brandon-Castillo';
    const result = removeHyphen(text);
    const expected = 'first unit test of Brandon Castillo';

    expect(result).toBe(expected);
  });

  it('Edge case: empty string', () => {
    const result = removeHyphen('');
    const expected = '';

    expect(result).toBe(expected);
  });
});
