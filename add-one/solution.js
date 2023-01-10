/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i == digits.length - 1) {
            digits[i] += 1
        }
        digits[i] += carry
        carry = 0
        if (digits[i] >= 10) {
            carry = 1
            digits[i] = 0;
            if (i == 0) {
                return digits.unshift(1)
            }
        }
    }
    return digits
};