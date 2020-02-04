// Complete the sockMerchant function below.
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.
``


function sockMerchant(n, ar) {
    let typeOfSocks = [...new Set(ar)]
    let count = 0
    for (let i = 0; i < typeOfSocks.length; i++) {
        const numberOfTimes = ar.filter(socks => socks === typeOfSocks[i]).length
        const remainder = numberOfTimes % 2
        if (remainder) {
            count += (numberOfTimes - remainder) / 2
        }
        else count += numberOfTimes/2
    }
    return count
}