function noTriples(nums) {
  let result = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums.length >= 3) {
      if (nums[i] == nums[i + 1] && nums[i + 1] == nums[i + 2]) {
        result = false
      }
    }
  }

  return result
}
