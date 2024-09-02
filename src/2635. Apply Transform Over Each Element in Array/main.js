// 2635. Apply Transform Over Each Element in Array

// Учитывая целочисленный массив  arr и функцию отображения  fn, вернуть новый массив с преобразованием, примененным к каждому элементу.

// Возвращаемый массив должен быть создан таким образом, чтобы  returnedArray[i] = fn(arr[i], i).

// Пожалуйста, решите это без встроенного Array.map метода.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};
