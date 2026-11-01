function altPairs(str) {
  let result = ""
  for (let i = 0; i < str.length; i += 4) {
    result += str[i]

    if (i + 1 < str.length) {
      result += str[i + 1]
    }
  }


  return result
}
