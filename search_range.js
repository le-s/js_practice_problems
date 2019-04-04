const searchRange = (nums, target) => {
  let middleIndex = Math.floor(nums.length / 2);
  let array = [];
  let reverse = true;

  while (reverse) {
    if (nums[middleIndex - 1] !== target) {
      reverse = false;
    } else {
      middleIndex = middleIndex - 1
    }
  }

  if (target >= nums[middleIndex]) {

    for (let i = middleIndex; i < nums.length; i++) {
      if (nums[i] === target) {
        if (array.length == 2) {
          array.pop();
        }

        array.push(i);
      }
    }
  } else {
    for (let i = 0; i < middleIndex; i++) {
      if (nums[i] === target) {
        if (array.length == 2) {
          array.pop();
        }

        array.push(i);
      }
    }
  }


  if (array.length === 0) {
    array = [-1, -1];
  }

  if (array.length === 1) {
    array.push(array[0]);
  }

  return array;
};