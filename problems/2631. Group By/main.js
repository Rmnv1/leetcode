// 2631. Group By

// Напишите код, который расширяет все массивы таким образом, чтобы можно было вызвать  array.groupBy(fn) метод для любого массива, и он вернет сгруппированную версию массива.

// Сгруппированный массив — это объект, в котором каждый ключ является выходным значением, а каждое значение — массивом, fn(arr[i]) содержащим все элементы исходного массива с этим ключом.

// Предоставленный обратный вызов fn примет элемент в массиве и вернет строковый ключ.

// Порядок каждого списка значений должен соответствовать порядку расположения элементов в массиве. Любой порядок ключей приемлем.

// Пожалуйста, решите это без функции lodash _.groupBy.

/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function (fn) {
  let arr = this;
  const groupedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const key = fn(arr[i]);
    if (!groupedObj[key]) groupedObj[key] = [];
    groupedObj[key].push(arr[i]);
  }

  return groupedObj;
};

// Для тестов
// let arr = [{ id: "1" }, { id: "1" }, { id: "2" }];

// const fn = function (item) {
//   return item.id;
// };

// arr.groupBy(fn);
