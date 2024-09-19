// 539. Minimum Time Difference

// Учитывая список точек времени в 24-часовом формате «ЧЧ:ММ», вернуть минимальную разницу в минутах между любыми двумя точками времени в списке.

/**
 * @param {string[]} timePoints
 * @return {number}
 */

var findMinDifference = function (timePoints) {
  const convertedMinutes = timePoints.map((time) => {
    let [hours, minutes] = time.split(":");
    return Number(hours) * 60 + Number(minutes);
  });
  convertedMinutes.sort((a, b) => a - b);

  let result = Infinity;

  for (let i = 1; i < convertedMinutes.length; i++) {
    result = Math.min(result, convertedMinutes[i] - convertedMinutes[i - 1]);
  }

  return Math.min(
    result,
    1440 - convertedMinutes.at(-1) + convertedMinutes.at(0)
  );
};
