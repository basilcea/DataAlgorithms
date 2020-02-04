// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .


// For  of the test cases, .
// Output Format

// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

// Sample Input 


function repeatedString(s, n) {
    //split string into array 
    let letterArray = s.split('');
      // get the length of the array
    // get the number of occurences of a in the  new array
//   let aOccurences = letterArray.filter(letter => letter === 'a').length
let aOccurences = s.match(/a/g).length
    let stringLength = s.length
    let remainder = n % stringLength
    let numberOfDivisions = (n - remainder)/ stringLength
    s.slice(0, remainder).match(/a/g).length
    let count = (aOccurences * numberOfDivisions) + aOccurencesInRemainder
    return count 
  
  
  }