function everyNth(str, n) {
  let newStr = ""

  for (let i = 0; i < str.length; i++) {
    if (i % n == 0) {
      newStr += str[i]
    }
  }

  return newStr
}
