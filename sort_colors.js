var sortColors = function (nums) {
  let small = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === 0) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[small];
      nums[small] = temp;
      small++;
    }

    if (nums[i] > nums[i + 1]) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[i];
      nums[i] = temp
    }
  }

  return nums;
};