let arr = [2,4,5,5,5,5,5,7,9,9];
let target = 5;
let output = [ 2, 6 ]
let result = []

if (arr[0] === target) {
  result.push(0)
}
let left = 0
let right = arr.length - 1;
while (left <= right) {
  let mid = Math.round((left + right) / 2)
  if (arr[mid] == target && arr[mid - 1 < target]) result.push(mid)
  else if (arr[mid] < target) {
    left = mid + 1
  } else {
    right = mid - 1
  }
  result = [-1, -1]
}
console.log(result)
