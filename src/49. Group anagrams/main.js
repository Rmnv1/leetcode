// 49. Group Anagrams
// Дан массив строк strs, сгруппируйте анаграммы вместе. Вы можете вернуть ответ в любом порядке .

// Анаграмма — это слово или фраза , образованные путем перестановки букв другого слова или фразы, обычно с использованием всех исходных букв ровно один раз.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort().join("");
    if (!map[word]) {
      map[word] = [];
    }
    map[word].push(strs[i]);
  }

  return Object.values(map);
};
