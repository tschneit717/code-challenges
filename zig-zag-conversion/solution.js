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
        if (loopback) {
            let j = numRows - 2;
            while (j > 0) {
                for (let k = 0; k < numRows; k++) {
                    if (k === j) {
                        results[k].push(s[i])
                        i++
                    } else {
                        results[k].push('')
                    }
                }
                j--
            }
            loopback = false
        }
        for (let j = 0; j < numRows; j++) {
            if (results[j]) {
                results[j].push(s[i])
            } else {
                results.push([s[i]])
            }
            i++
        }
        loopback = true
    }
    let res = ''
    for (let i = 0; i < results.length; i++) {
        res += results[i].join('')
    }

    return res
};

