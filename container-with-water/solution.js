/**
 * @param {number[]} height
 * @return {number}
 */

const samples = [
  [1,8,6,2,5,4,8,3,7],
  [1,1],
  [1,2,1],
  [1,2],
  [4,3,2,1,4]
]


var maxArea = function(height) {
  let left = 0;
  let right = 0;
  let indexes = 0;
  let largest = 0;
  height.reduce((acc, iteration, index) => {
    if (index === 0) {
      left = iteration
    }
    if (right === 0 && index !== 0) {
      right = iteration;
    }
    tempVal = indexes * Math.min(right < left ? right : left, iteration);
    if (iteration > left && tempVal >= acc) {
      indexes = 0;
      left = iteration
    } 
    if (iteration > right && tempVal > acc && indexes !== 0) {
      right = iteration
    }
    indexes++
    acc = Math.min(0, index - indexes) * (right < left ? right : left)
    if (largest < tempVal) {
      largest = tempVal
      return tempVal
    } 
    if (largest < acc) {
      largest = acc
    }
    return acc;
    
  }, 0)
  return largest;
};

samples.forEach((sample) => {
  console.log(maxArea(sample));
});
