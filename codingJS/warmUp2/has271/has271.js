function has271(nums) {
  let result = false;

  for (let i = 0; i < nums.length - 2; i++) {
    if (
      nums[i] === 2 &&
      nums[i + 1] === 7 &&
      Math.abs(nums[i + 2] - 1) < 2
    ) {
      result = true;
    }
  }

  return result;
}
