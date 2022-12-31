let arr = [2,4,5,5,5,5,5,7,9,9];
let target = 5;
let output = [ 2, 6 ]
let result = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    if (result[1]) {
      result[1] = i
    } else {
      result.push(i)
    }
  }
}
if (!result.length) return [-1, -1]
return result
