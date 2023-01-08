/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let foundIndex = -1;
    let j = 0;
    let foundString = ""
    if (needle.length > haystack.length) return foundIndex;
    for (let i = 0; i < haystack.length; i++) {
        if (foundIndex > -1) return foundIndex
        if (needle[j] == haystack[i]) {
            foundIndex = i
            let temp = i;
            while (needle[j] == haystack[temp] && j < needle.length) {
                foundString += needle[j]
                if (foundString == needle) {
                    break
                }
                j++
                temp++
            }
        } 
        if (foundString !== needle) {
            foundString = ""
            foundIndex = -1
            j = 0
        }
    }
    return foundIndex;
};