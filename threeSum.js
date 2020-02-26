function threesum (nums) {
    let newarray = nums.sort()
    const dict = {}
    let neededArrays = []
    aValues =[]
    for(let i =0; i < newarray.length - 2; i++){
      let a = i+1
      let b = newarray.length-1
      while (a < b){
        let sumArray = newarray[i] + newarray[a] + newarray[b]
        let value = aValues.includes(newarray[a])
        if(sumArray === 0){
          if (!value){
            neededArrays.push([newarray[i],newarray[a],newarray[b]])
            aValues.push(newarray[a])
          }
          a++
          b--
        }
        else if(sumArray < 0){
          a++
        }
        else if(sumArray > 0){
          b--
        }
        else return "None"
      }
    }
    return neededArrays
};
