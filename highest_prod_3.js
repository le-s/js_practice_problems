function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  if (arrayOfInts.length <= 2) {
    throw new Error("Too small")
  }
  arrayOfInts.sort((a, b) => {
    return a - b;
  })

  let num = 1

  return arrayOfInts.slice(arrayOfInts.length - 3).reduce((acc, val) => {

    return acc * val;
  }, num)
}

highestProductOf3([1,2,3,4])