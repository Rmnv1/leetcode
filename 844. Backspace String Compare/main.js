// 844. Backspace String Compare
// Даны две строки s и t, вернуть, true если они равны, когда обе введены в пустые текстовые редакторы. '#'означает символ возврата на одну позицию.

// Обратите внимание, что после удаления пустого текста текст будет продолжаться пустым.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const first = [];
  const second = [];
  let wordToSkip = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      wordToSkip += 1;
      continue;
    }
    if (!wordToSkip) first.push(s[i]);

    if (wordToSkip) {
      wordToSkip -= 1;
    }
  }

  wordToSkip = 0;

  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === "#") {
      wordToSkip += 1;
      continue;
    }

    if (!wordToSkip) second.push(t[i]);

    if (wordToSkip) {
      wordToSkip -= 1;
    }
  }

  return first.join("") === second.join("");
};

backspaceCompare("#a#c", "#a#c");
backspaceCompare("a##c", "#a#c");
