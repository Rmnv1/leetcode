// 169. Majority Element
// Для заданного массива numsразмера nвернуть элемент большинства.

// Элемент большинства — это элемент, который появляется больше ⌊n / 2⌋раз. Вы можете предположить, что элемент большинства всегда существует в массиве.

// A Linear Time Majority Vote Algorithm
// https://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html
// o(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let vote = 0;
  let current = null;

  for (let i = 0; i < nums.length; i++) {
    if (!vote) {
      current = nums[i];
    }
    if (nums[i] === current) {
      vote += 1;
    } else {
      vote -= 1;
    }
  }
  return current;
};

// o(logn)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let tempNums = nums.sort();
  return tempNums[Math.ceil((tempNums.length - 1) / 2)];
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
