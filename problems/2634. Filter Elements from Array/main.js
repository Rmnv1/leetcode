// 2634. Filter Elements from Array
// Для заданного целочисленного массива arrи функции фильтрации fnвернуть отфильтрованный массив filteredArr.

// Функция fnпринимает один или два аргумента:

// arr[i]- номер из arr
// i - индекс arr[i]
// filteredArrдолжно содержать только элементы из ,  arrдля которых выражение fn(arr[i], i)оценивается как истинное значение.  Истинное  значение — это значение, где  Boolean(value) возвращает  true.

// Пожалуйста, решите это без встроенного Array.filter метода.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i]);
  }
  return result;
};
