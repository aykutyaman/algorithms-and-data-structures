import nQueens from './nQueens.ts';

describe('nQueens', () => {
  test('solves problem with 4 queens', () => {
    const solutions = nQueens([0, 1, 2, 3]);
    expect(solutions.length).toBe(2);
    expect(solutions[0].toString()).toBe('1,3,0,2');
    expect(solutions[1].toString()).toBe('2,0,3,1');
  });
});
