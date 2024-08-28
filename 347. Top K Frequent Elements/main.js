// 347. Top K Frequent Elements
// Дан массив целых чисел numsи целое число k, вернуть наиболее k часто встречающиеся элементы. Вы можете вернуть ответ в любом порядке.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  const entries = Object.entries(map);
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  const result = [];
  let i = 0;

  while (i < k) {
    result.push(sorted[i][0]);
    i++;
  }

  return result;
};

topKFrequent([1, 1, 1, 2, 2, 3]);
