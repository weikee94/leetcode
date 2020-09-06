/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  // row * column
  // row = maxtrix.length
  // column = matrix[0].length
  // add 0 to outside fix out of boundary issues
  const newArray = new Array(matrix.length + 1)
    .fill(0)
    .map((column) => new Array(matrix[0].length + 1).fill(0));
  let max = 0;

  for (let i = 1; i < newArray.length; i++) {
    for (let j = 1; j < newArray[i].length; j++) {
      newArray[i][j] = parseInt(matrix[i - 1][j - 1]);
    }
  }

  for (let i = 1; i < newArray.length; i++) {
    for (let j = 1; j < newArray[i].length; j++) {
      // newArray[i-1][j-1] top left corner
      // newArray[i-1][j] top
      // newArray[i][j-1] left
      // if current node is 0 then we just keep 0 because is cannot form a square
      // else add the min from either top left, top, left
      if (newArray[i][j] >= 1) {
        newArray[i][j] =
          Math.min(
            newArray[i - 1][j - 1],
            newArray[i - 1][j],
            newArray[i][j - 1]
          ) + newArray[i][j];
      }

      if (newArray[i][j] > max) {
        max = newArray[i][j];
      }
    }
  }

  return max * max;
};

// 解法
// 1 DP , 跟之前外围建0的border相似， 避免 i-1, j-1 计算错误
// 2 重点：当前值 + 左上 ｜｜ 上 ｜｜ 左 最小值
//      1 1 1          1 1 1         1 1 1
//      1 1 1    ===>  1 2 1  ===>   1 2 2
//      1 1 1          1 1 1         2 2 3
