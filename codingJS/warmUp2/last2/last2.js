function last2(str) {
  let laststr = str.slice(str.length - 2, str.length + 1)

  let count = 0
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] + str[i] == laststr) {
      count++
    }

  }
  if (count == 0) {
    return count
  } else {
    return count - 1
  }
}
