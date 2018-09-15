import { containsDublicate } from './containsDublicate';

describe('containsDublicate', () => {

  test('simple numbers with dublicates', () => {
    expect(containsDublicate([1, 2, 3, 1])).toBe(true);
  });

  test('simple numbers without dublicates', () => {
    expect(containsDublicate([1, 2, 3, 5])).toBe(false);
  });

  test('simple numbers with dublicates in the middle', () => {
    expect(containsDublicate([7, 2, 1, 1, 3, 9, 15])).toBe(true);
  });

});
