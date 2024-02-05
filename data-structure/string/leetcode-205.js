var s = "egg";
var t = "att";
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }
  let objectS = {};
  let objectT = {};
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    let tLetter = t[i];
    if (!objectS[sLetter]) {
      // 為了讓其中第一字母對應第二字母的其中一個
      objectS[sLetter] = tLetter;
    }
    if (!objectT[tLetter]) {
      objectT[tLetter] = sLetter;
    }
    // 確認對應的關係在這裏
    if (objectS[sLetter] !== tLetter || objectT[tLetter] !== sLetter) {
      return false;
    }
  }
  return true;
};
