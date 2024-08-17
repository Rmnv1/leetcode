// 448. Find All Numbers Disappeared in an Array
// Дан диапазон чисел от 1 до n, где n - длина массива. Необходимо вычислить пропущенные числа

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
