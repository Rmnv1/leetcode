// 389. Find the Difference

// Вам даны две строки sи t.

// Строка t генерируется путем случайного перемешивания строки s и последующего добавления еще одной буквы в случайную позицию.

// Верните букву, которая была добавлена ​​к t.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function (s, t) {
  if (!s) return t;
  if (!t) return s;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) - 1);
    if (map.get(t[i]) === 0) {
      map.delete(t[i]);
    }
  }

  return Array.from(map.keys())[0];
};
