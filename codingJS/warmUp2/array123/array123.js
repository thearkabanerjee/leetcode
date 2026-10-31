function array123(nums) {
  let result = false
  for (let i = 2; i < nums.length; i++) {
    if (arr[i - 2] == 1 && arr[i - 1] == 2 && arr[i] == 3) {
      result = true
      break
    }
  }

  return result
}
