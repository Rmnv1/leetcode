// 884. Uncommon Words from Two Sentences

// Предложение представляет собой строку слов, разделенных одним пробелом, где каждое слово состоит только из строчных букв.

// Слово считается необычным, если оно встречается ровно один раз в одном предложении и не встречается в другом предложении.

// Даны два предложения s1 и s2, верните список всех редких слов. Вы можете вернуть ответ в любом порядке.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

var uncommonFromSentences = function (s1, s2) {
  const map = new Map();
  const arr1 = s1.split(" ");
  const arr2 = s2.split(" ");
  const result = [];

  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i]) {
      if (!map.has(arr1[i])) {
        map.set(arr1[i], 1);
      } else {
        map.set(arr1[i], map.get(arr1[i]) + 1);
      }
    }
    if (arr2[i]) {
      if (!map.has(arr2[i])) {
        map.set(arr2[i], 1);
      } else {
        map.set(arr2[i], map.get(arr2[i]) + 1);
      }
    }
  }

  for (let [value, count] of map) {
    if (count === 1) result.push(value);
  }

  return result;
};
