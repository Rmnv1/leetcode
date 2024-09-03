// 2665. Counter II
// Напишите функцию  createCounter. Она должна принимать начальное целое число  init. Она должна возвращать объект с тремя функциями.
// Эти три функции таковы:
// increment() увеличивает текущее значение на 1, а затем возвращает его.
// decrement() уменьшает текущее значение на 1, а затем возвращает его.
// reset() устанавливает текущее значение  init и затем возвращает его.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let result = init;
  return {
    increment: () => (result += 1),
    reset: () => (result = init),
    decrement: () => (result -= 1),
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
