function getBagCounts(clientOrders, availableBagSizes) {
  // TODO: remove this hard-coded solution for test scenario
  // clientOrders === [9]
  const sorted = availableBagSizes.sort((a, b) => b - a);
  let returnArray = [];
  for (let i = 0; i < sorted.length; i++) {
    returnArray.push({ size: sorted[i], count: 0 });
  }

  //   for (let i = 0; i < clientOrders.length; i++) {
  //     let value = clientOrders[i];
  //     let quotient = Math.floor(value / returnArray[0]["size"]);
  //     let remainder = clientOrders[i] % returnArray[0]["size"];
  //     returnArray[0]["count"] += quotient;
  //     if (remainder !== 0) {
  //       quotient = Math.floor(remainder / returnArray[1]["size"]);
  //       remainder = remainder % returnArray[1]["size"];
  //       returnArray[1]["count"] += quotient;
  //       if (remainder !== 0) {
  //         quotient = Math.floor(remainder / returnArray[2]["size"]);
  //         remainder = remainder % returnArray[2]["size"];
  //         returnArray[2]["count"] += quotient;
  //         if (remainder !== 0) {
  //           if ((remainder * 2) % returnArray[2]["size"] === 0) {
  //             returnArray[2]["count"] += 0.5;
  //           } else {
  //             throw Error("Cannot Fufill demand of less than 1/2 bag");
  //           }
  //         }
  //       }
  //     }
  //   }
  // first pass solution
  // O(n)

  //   for (let i = 0; i < clientOrders.length; i++) {
  //       let value = clientOrders[i];
  //       for (let j = 0; j < sorted.length; j++){
  //           let quotient = Math.floor(value/ sorted[j]);
  //           let remainder = value % sorted[j];
  //           returnArray[j]["count"] += quotient;
  //           value = remainder;
  //           if (remainder !== 0){
  //             if((j === sorted.length - 1) && (remainder * 2 % sorted[j] === 0)){
  //                 returnArray[j]['count'] += 0.5;
  //             }
  //             quotient = Math.floor(remainder / sorted[j+1]);
  //             remainder = remainder %  sorted[j+1];
  //           }
  //       }
  //   }
  // second pass solution
  // o(n2)

  //

  // based on the principle that if three values divide a number say 4, 3, 1 dividing 6
  // 6/ 4 = 1 r 2  .. 1+2 = 3
  // 6/3 = 2 r 0 .. 2+ 0 = 2
  // 6/1 = 6 r 0 ... 6 +0 = 2
  // most optimal is to divide it by 3
  // if you had 5 it would have been personal preference to go with 1 bag of 5kg and 1 bag of 1kg or 2 bags of 3kg
  // 6/5 = 1 r 1... 1+1 = 2
  // therfore the least value should be the most optimal and should be the one to start count with
  // since it is sorted in descending order if the  greatest available size is not the optimal one, it follows that it would be the next or the one after it
  // therefore we start with the index that has the most optimal division
  // initail value is kept at value * 3 because the least bag a user can be given is half of one bag and if it divides
    // the value * by half it would be value * 2
  for (let i = 0; i < clientOrders.length; i++) {
    let value = clientOrders[i];
    
    let initial = value * 3;
    let key = 0;
    for (let j = 0; j < sorted.length; j++) {
      let quotient = Math.floor(value / sorted[j]);
      let remainder = value % sorted[j];
      if (quotient + remainder < initial) {
        initial = quotient + remainder;
        key = j;
      }
    }
    for (let k = key; k < sorted.length; k++) {
      let quotient = Math.floor(value / sorted[k]);
      let remainder = value % sorted[k];
      returnArray[k]["count"] += quotient;
      value = remainder;
      if (remainder !== 0) {
        if (k === sorted.length - 1 && (remainder * 2) % sorted[k] === 0) {
          returnArray[k]["count"] += 0.5;
        }
        quotient = Math.floor(remainder / sorted[k + 1]);
        remainder = remainder % sorted[k + 1];
      }
    }
  }
  return returnArray;
}

module.exports = getBagCounts;
