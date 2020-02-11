var isAnagram = function(s, t) {
  if (s.length === t.length) {
    var mapS = {};
    var mapT = {};
    for (let i = 0; i < s.length; i++) {
      // 用hashmap來計算出現個別alphabet次數
      mapS[s[i]] = (mapS[s[i]] || 0) + 1;
      mapT[t[i]] = (mapT[t[i]] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
      // compare 兩個hashmap的個別字母次數
      if (mapS[s[i]] !== mapT[s[i]]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
