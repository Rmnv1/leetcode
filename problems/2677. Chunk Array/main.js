// 2677. Chunk Array

var chunk = function (arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr.splice(0, size));
    console.log(result);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5];
chunk(arr);
