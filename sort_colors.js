const sortColors = nums => {
  let low = 0;
  let high = nums.length - 1;
  let temp;

  for (let i = 0; i < high; i++) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[low];
      nums[low] = temp;
      low++;
    } else if (nums[i] === 2) {
      temp = nums[i];
      nums[i] = nums[high];
      nums[high] = temp;
      high--;
    }
  }

  console.log(nums);
  return nums;
};

// var sortColors = function (nums) {
//   let small = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] === 0) {
//       let temp = nums[i + 1];
//       nums[i + 1] = nums[small];
//       nums[small] = temp;
//       small++;
//     }

//     if (nums[i] > nums[i + 1]) {
//       let temp = nums[i + 1];
//       nums[i + 1] = nums[i];
//       nums[i] = temp
//     }
//   }

//   return nums;
// };

sortColors([2,0,2,1,1,0]);