var isAnagram = function(s, t) {
  if (s.length === t.length) {
    var mapS = {};
    var mapT = {};
    for (let i = 0; i < s.length; i++) {
      mapS[s[i]] = (mapS[s[i]] || 0) + 1;
      mapT[t[i]] = (mapT[t[i]] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
      if (mapS[s[i]] !== mapT[s[i]]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
