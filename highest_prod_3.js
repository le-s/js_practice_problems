function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  if (arrayOfInts.length <= 2) {
    throw new Error("Too small")
  }
  
  let highest3;
  let highest2;
  let highest = arrayOfInts[0];
  let lowest2;
  let lowest = arrayOfInts[0];
  
  for (let i = 1; i < arrayOfInts.length; i++) {
    console.log('before');
    console.log("this is " + i + " iteration");
    console.log("this is highest3: " + highest3);
    console.log("this is highest2: " + highest2);
    console.log("this is highest: " + highest);
    console.log("this is lowest2: " + lowest2);
    console.log("this is lowest: " + lowest);

    if (highest2) {
      if (!highest3 || highest3 < highest2 * arrayOfInts[i]){
        highest3 = highest2 * arrayOfInts[i];
      }
    }
  
    if (lowest2) {
      if (!highest3 || highest3 < lowest2 * arrayOfInts[i]) {
        highest3 = lowest2 * arrayOfInts[i];
      }
    }
    
    if (!highest2 || highest * arrayOfInts[i] > highest2) {
      highest2 = highest * arrayOfInts[i];
    }

    if (!lowest2 ||lowest * arrayOfInts[i] > lowest2) {
      lowest2 = lowest * arrayOfInts[i];
    }

    if (highest < arrayOfInts[i]) {
      highest = arrayOfInts[i];
    }

    if (lowest > arrayOfInts[i]) {
      lowest = arrayOfInts[i];
    }
    console.log('after');
    console.log('this is ' + i + ' iteration')
    console.log('this is highest3: ' + highest3)
    console.log('this is highest2: ' + highest2)
    console.log('this is highest: ' + highest)
    console.log('this is lowest2: ' + lowest2)
    console.log('this is lowest: ' + lowest)
  }

  highest3 = Math.max(lowest2 * highest, highest3)
  console.log(highest3)
  return highest3;
}


// Brute Force Approach

// function highestProductOf3(arrayOfInts) {

//   // Calculate the highest product of three numbers
//   if (arrayOfInts.length <= 2) {
//     throw new Error("Too small")
//   }
//   arrayOfInts.sort((a, b) => {
//     return a - b;
//   })

//   let num = 1

//   return arrayOfInts.slice(arrayOfInts.length - 3).reduce((acc, val) => {

//     return acc * val;
//   }, num)
// }

highestProductOf3([-5, -1, -3, -2]);