// 2667. Create Hello World Function

// Напишите функцию  createHelloWorld. Она должна возвращать новую функцию, которая всегда возвращает  "Hello World".

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

// const f = createHelloWorld();
// f(); // "Hello World"
