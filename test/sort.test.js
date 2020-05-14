import sort from '../src/sort/index.js';

test('buddleSort([1, 3, 2, 4, 0, 9, 8])等于[0, 1, 2, 3, 4, 8, 9]', () => {
  expect(sort.buddleSort([1, 3, 2, 4, 0, 8, 9])).toEqual([0, 1, 2, 3, 4, 8, 9]);
})
