// 977. Squares of a Sorted Array

// Дан массив целых чисел nums, отсортированный в неубывающем порядке. Вернуть массив квадратов каждого числа, отсортированный в неубывающем порядке.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  const result = [];

  if (nums.length === 1) return [nums[0] * nums[0]];

  while (l <= r) {
    if (nums[l] * nums[l] > nums[r] * nums[r]) {
      result.unshift(nums[l] * nums[l]);
      l++;
      continue;
    }
    if (nums[l] * nums[l] < nums[r] * nums[r]) {
      result.unshift(nums[r] * nums[r]);
      r--;
      continue;
    }
    if (nums[l] * nums[l] === nums[r] * nums[r] && l !== r) {
      result.unshift(nums[r] * nums[r]);
      result.unshift(nums[l] * nums[l]);
      l++;
      r--;
      continue;
    }
    if (l === r) {
      result.unshift(nums[l] * nums[l]);
      l++;
    }
  }

  return result;
};
