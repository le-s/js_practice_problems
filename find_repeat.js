// Brute force
// time: O(n log n) => because of sorting
// space: O(1)
function findRepeat(numbers) {

  // Find a number that appears more than once
  numbers.sort((a, b) => {
    return a - b;
  })

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      return numbers[i];
    }
  }
}

findRepeat([1, 2, 3, 2]);