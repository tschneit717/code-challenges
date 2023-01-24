const input = [3, 4, 2, 1, 6, 6, 4, 4];
function printBarGraph(arr) {
    console.time()
    const map = {}
    let height = 0;
    for (let i of arr) {
        if (!(i in map)) {
            map[i] = 1
        } else {
            map[i]++
            if (map[i] > height) {
                height = map[i]
            }
        }
    }
    
    while (height >= 0) {
        let string = ''
        for (let i = 0; i < arr.length; i++) {
            if (height === 0) {
                if (!(string.includes(arr[i]))) {
                    string += arr[i]
                }
            } else if (map[arr[i]] === height) {
                string += '*'
                map[arr[i]]--
            } else {
                string += ' '
            }
        }
        console.log(string)
        height--
    }
    console.timeEnd()
}

console.log(printBarGraph(input))