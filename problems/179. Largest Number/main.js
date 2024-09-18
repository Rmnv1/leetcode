// 179. Largest Number

// Дан список неотрицательных целых чисел nums, расположите их так, чтобы они образовали наибольшее число, и верните его.

// Поскольку результат может быть очень большим, вам необходимо вернуть строку вместо целого числа.

/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {
  const tempNums = nums.slice();
  let result = "";

  tempNums.sort((a, b) => {
    let strA = a.toString();
    let strB = b.toString();

    let strAB = strA + strB;
    let strBA = strB + strA;

    return strAB > strBA ? -1 : 1;
  });

  result = tempNums.join("");
  return result[0] !== "0" ? result : "0";
};
