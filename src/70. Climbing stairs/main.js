// 70. Climbing Stairs
// Вы поднимаетесь по лестнице. Чтобы достичь вершины, нужны шаги.

// Каждый раз вы можете либо подняться, по 1 или 2 ступенькам. Сколькими различными способами вы можете подняться на вершину?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;

  if (n < 2) return 1;

  for (let i = 1; i < n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }
  return thirdStep;
};

// Числа Фибоначчи
