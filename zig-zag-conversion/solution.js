/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let results = []
    let i = 0;
    let loopback = false
    while (i < s.length) {
        for (let j = 0; j < numRows; j++) {
            if (loopback) {
                let j = numRows - 2;
                while (j > 0) {
                    for (let k = 0; k < numRows; k++) {
                        if (k === j && s[i]) {
                            results[k] += s[i]
                            i++
                        }
                    }
                    j--
                }
                loopback = false
            }
            if (results[j] && s[i]) {
                results[j] += s[i]
            } else {
                results.push([s[i]])
            }
            i++
            if (i === s.length) {
                break
            }
        }
        loopback = true
    }
    let res = ''
    for (let i = 0; i < results.length; i++) {
        res += results[i]
    }

    return res
};

