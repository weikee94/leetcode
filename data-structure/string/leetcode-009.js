var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  x += "";

  // 知識點： 採用雙向指針概念，各自往中心靠攏
  let i = 0;
  let j = x.length - 1;

  while (i < j) {
    if (x[i] !== x[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};
