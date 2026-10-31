function arrayFront9(nums) {
  let result = false
  for (let i = 0; i < 4; i++) {
    if (nums[i] == 9) {
      result = true
      break
    }
  }

  return result
}
