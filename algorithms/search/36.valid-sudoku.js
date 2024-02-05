/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // rows
  // columns
  // boxes

  let rows = [];
  let columns = [];
  let boxes = [];

  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    columns[i] = [];
    boxes[i] = [];
  }

  for (let j = 0; j < 9; j++) {
    for (let k = 0; k < 9; k++) {
      let value = board[j][k];

      if (value !== ".") {
        // check rows
        if (!rows[j].includes(value)) {
          rows[j].push(value);
        } else {
          return false;
        }

        // check columns
        if (!columns[k].includes(value)) {
          columns[k].push(value);
        } else {
          return false;
        }

        // check boxes
        // [0, 1, 2] how to know in which boxes, we can use Math.floor(valueK/3) 0,1,2 / 3 = 0; 3,4,5 / 3 = 1; 6,7,8 / 3 = 2;
        // [3, 4, 5] then how we know already go to 3, 4, 5? if Math.floor(valueJ/3) === 0, 0 + 0 || if Math.floor(valueJ/3) === 1, 3 + 0 || if Math.floor(valueJ/3) === 2, 6 + 0
        // [6, 7, 8]
        let boxIndex = Math.floor(j / 3) * 3 + Math.floor(k / 3);
        if (!boxes[boxIndex].includes(value)) {
          boxes[boxIndex].push(value);
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

// 解题思路
// 1 遍历row, column, and mini 3*3
// 2 检查值有没有重复
// 3 难点在于想出 box index 程式: let boxIndex = Math.floor(j / 3) * 3 + Math.floor(k / 3);
