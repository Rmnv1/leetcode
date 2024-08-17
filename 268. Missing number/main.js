// 268. Missing number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var findDisappearedNumbers = function (nums) {
  const result = [];
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(i + 1);
    if (!nums.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
