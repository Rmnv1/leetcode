// 2637. Promise Time Limit

// Учитывая асинхронную функцию  fn и время t в миллисекундах, вернуть новую  ограниченную по времени  версию входной функции. fn принимает аргументы, предоставленные  ограниченной по времени  функции.

// Ограниченная по времени функция должна соответствовать следующим правилам:

// Если fn выполнение завершается в течение лимита времени в tмиллисекундах, функция с ограничением по времени должна разрешиться с результатом.
// Если выполнение функции fn превышает лимит времени, функция с ограничением по времени должна отклониться со строкой "Time Limit Exceeded".

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var timeLimit = function (fn, t) {
  return function (...args) {
    const ctx = this;
    const p1 = new Promise((_, rej) =>
      setTimeout(() => rej("Time Limit Exceeded"), t)
    );
    const p2 = new Promise((res) => res(fn.apply(ctx, args)));
    return Promise.race([p1, p2]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
