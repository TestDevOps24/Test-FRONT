import { describe, it, expect } from 'vitest';
import { sum } from '../lib/sum';

describe('sum test', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});