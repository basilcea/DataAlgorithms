function countSwaps(a) {
    let numSwaps = 0;
    let swappedFinished = false
    for (let i = 0; i < a.length-1; i++) {
      for (let j = 0; j < a.length - 1-i; j++) {
        if (a[j] > a[j + 1]) {
          a[j+1] = [a[j] , a[j] = a[j+1] ][0]
            numSwaps ++
        }
    }
}
swappedFinished=true
if (swappedFinished){
console.log(`Array is sorted in ${numSwaps} swaps.`)
console.log(`First Element: ${a[0]}`)
console.log(`Last Element: ${a[a.length -1]}`)
}

}
countSwaps([4,2,3, 1])