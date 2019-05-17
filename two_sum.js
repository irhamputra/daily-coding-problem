// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function two_sum(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === k) {
        return true;
      }
    }
  }

  return false;
}

const array1 = [10, 15, 3, 7];
const num = 17;
console.log(two_sum(array1, num)); // true
