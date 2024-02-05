var s = "abcccdd";
var longestPalindrome = function(s) {
  var mapS = {};
  var mark = 0;
  var result = 0;
  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] = (mapS[s[i]] || 0) + 1;
  }

  // 知識點： 循環keys來找到可以map的值
  const keys = Object.keys(mapS);
  for (const key of keys) {
    if (mapS[key] % 2 === 0) {
      result += mapS[key];
    } else {
      // 知識點： 假設是aaa, 所以可以用的是aa這一對, 所以我們減1，且設mark+1為了baaab這種情況
      result += mapS[key] - 1;
      mark += 1;
    }
  }
  // 知識點： 立mark來確認單數的字母為了（bbacc）這種情況， 可以添加單一在中間
  return result + (mark > 0 ? 1 : 0);
};
