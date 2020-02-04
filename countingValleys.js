// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path
// Input Format

// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.

function countingValleys(n , s) {

    let count = 0
    // initially there is no movement so the hiker is at level 0
    let level = 0
    // initially the previous level is sea level which is 0
    let previousLevel = 0
    // first split the string s into an array of movements
    const movements = s.split('')
    // check the level and previous level for each movements
    for( let i = 0 ; i < n ; i++){
        // if the movement is upward the height should increase.
      if (movements[i] === "U"){
        level +=1
      }
    // if the movement is downward the height should reduce
      if (movements[i] === "D"){
        level -=1
      }

// if the pre
      if(level === 0 && previousLevel < 0){
         console.log(level , previousLevel, count)
      count +=1
    
      }
    previousLevel = level
    }
    return count
  }
  