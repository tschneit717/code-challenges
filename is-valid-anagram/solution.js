/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) {
      map1[s[i]] = 1;
    } else {
      map1[s[i]]++;
    }
    if (!map2[t[i]]) {
      map2[t[i]] = 1;
    } else {
      map2[t[i]]++;
    }
  }
  for (property in map1) {
    if (map2[property] !== map1[property]) return false;
  }
  return true;
};
