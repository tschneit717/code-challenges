let str1 = 'gardesn';
let str2 = 'dangetr';

if (str1.length !== str2.length) return false;

let freq1 = {}
let freq2 = {}

for (let i = 0; i < str1.length; i++) {
  if (freq1[str1[i]]) {
    freq1[str1[i]] += 1
  } else {
    freq1[str1[i]] = 1
  }
  if (freq2[str2[i]]) {
    freq2[str2[i]] += 1
  } else {
    freq2[str2[i]] = 1
  }
}

let keys = Object.keys(freq1);
let isAnagram = true;
for (let i = 0; i < keys.length; i++)  {
  if (!freq2[keys[i]] || freq1[keys[i]] !== freq2[keys[i]]) isAnagram = false
}

return isAnagram