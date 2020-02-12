function comparatorValue(a, b, d) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
       let comp = []
        for (let j = 0; j < b.length; j++) {
            if (Math.abs(a[i] - b[j]) <= d) {
                comp.push(i)
            }
         }
            if (comp.length < 1) {
                count++
            }
    }
    return count
}
comparatorValue([3,1,5], [5,6,7], 2)