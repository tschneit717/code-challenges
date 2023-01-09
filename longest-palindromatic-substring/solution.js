/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let result = ""
    if (s.length == 1) {
        return s
    }
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            if (right - left + 1 > result.length) {
                result = s.substring(left, right + 1)
            }
            right++
            left--
        }
        left = i;
        right = i + 1
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            if (right - left + 1 > result.length) {
                result = s.substring(left, right + 1)
            }
            right++
            left--
        }
    }
    return result
};

const samples = [
    {test: "ac", output: "a"},
    // {test: "cbbd", output: "bb"},
    // {test: "iamatacocat", output: "tacocat"},
    // {test: "vmqjjfnxtyciixhceqyvibhdmivndvxyzzamcrtpywczjmvlodtqbpjayfchpisbiycczpgjdzezzprfyfwiujqbcubohvvyakxfmsyqkysbigwcslofikvurcbjxrccasvyflhwkzlrqowyijfxacvirmyuhtobbpadxvngydlyzudvnyrgnipnpztdyqledweguchivlwfctafeavejkqyxvfqsigjwodxoqeabnhfhuwzgqarehgmhgisqetrhuszoklbywqrtauvsinumhnrmfkbxffkijrbeefjmipocoeddjuemvqqjpzktxecolwzgpdseshzztnvljbntrbkealeemgkapikyleontpwmoltfwfnrtnxcwmvshepsahffekaemmeklzrpmjxjpwqhihkgvnqhysptomfeqsikvnyhnujcgokfddwsqjmqgsqwsggwhxyinfspgukkfowoxaxosmmogxephzhhy", output: ""}
]

samples.forEach(item => {
    console.log(longestPalindrome(item.test), item.output, longestPalindrome(item.test) == item.output)
})