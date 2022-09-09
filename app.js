function loadGrain(levels) {
    let result = 0

    if (levels.length < 3){
        return result
    }

    const mt = []
    const max = Math.max(...levels)
    for (let lv of levels) {
        const column = new Array(lv).fill(1).concat(new Array(max - lv).fill(0))
        mt.push(column)
    }
    const matrix = mt[0].map((_, ind) => mt.map(row => row[ind]))

    for (let i = 0; i < max; i++){
        let firstOne = matrix[i].indexOf(1)
        let lastOne = matrix[i].lastIndexOf(1)
        for (let j = firstOne; j < lastOne; j++){
            if (matrix[i][j] !== 1){
                result++
            }
        }
    }

    return result;
}

console.log(loadGrain([4, 1, 3])) // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])) // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
console.log(loadGrain([2, 4, 2])) // 0
console.log(loadGrain([7, 4])) // 0
console.log(loadGrain([])) // 0


