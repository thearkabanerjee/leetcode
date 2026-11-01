function array667(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 6 && (nums[i + 1] == 7 || nums[i + 1] == 6)) {
      count++
    }
  }

  return count
}
