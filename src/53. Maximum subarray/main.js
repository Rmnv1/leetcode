// 53. Maximum Subarray
// Дан целочисленный массив nums, найдите подмассив с наибольшей суммой и верните его сумму.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    result = Math.max(result, temp);
    if (temp < 1) {
      temp = 0;
    }
  }

  return result;
};

// Лучшее решение:
// Largest Sum Contiguous Subarray (Kadane’s Algorithm)
var maxSubArray = function (nums) {
  let curr_sum = nums[0];
  let max_sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr_sum = Math.max(nums[i], curr_sum + nums[i]);
    max_sum = Math.max(curr_sum, max_sum);
  }
  return max_sum;
};
