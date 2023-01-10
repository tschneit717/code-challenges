/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 1+1=0 with carry 1
// 1+0=1 with carry 0
// 0+1=1 with carry 0
// 0+0=0 with carry 0
// carry 1 + 1 + 1 = 1 with carry 1

var addBinary = function(a, b) {
    let result = ""
    let carry = 0
    let length = Math.max(a.length, b.length) 
    let i = 1
    while (i <= length) {
        let numA = Number(a[a.length - i]) || 0;
        let numB = Number(b[b.length - i]) || 0;
        let sum = numA + numB + carry;
        carry = sum > 1 ? 1 : 0
        result = sum % 2 + result;
        i++
    }
    if (carry == 1) result = "1" + result
    return result
};

const samples = [
    {a: "1101", b: "1"},
    {a: "1010", b: "1011"},
    {a: "110", b: "1"},
    {a: "11", b: "1"},
    {a: "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", b: "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"}
]

samples.forEach(item => {
    console.log(addBinary(item.a, item.b))
})